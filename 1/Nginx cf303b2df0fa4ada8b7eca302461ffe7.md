# Nginx

[nginx](https://nginx.org/ru/)

> Отличается быстротой и надежностью. Наиболее активно развивающийся сервер сегодня.
> 
- От Ильи Климова
    
    пока пишу лонгрид, советую потратить 12 минут посмотреть [https://vimeo.com/552704650/7cc389e41d](https://vimeo.com/552704650/7cc389e41d)
    
    давайте разбираться что написано у вас в конфиге.  я выкинул лишнее, оставил важное
    
    server {
    
    root   html;
    
    location / {
    
    proxy_pass http://172.30.19.220:8080;
    
    }
    
    }
    
    root html; <- отдавать все статические файлы из директории html
    
    location / - все запросы от корня (т.е. реально ВСЕ ЗАПРОСЫ) - пересылать на удаленный сервер (за это отвечает proxy_pass)
    
    Т.е. мы такие:
    
    - стучимся за условной вашей html-кой. nginx читает правила... Ага, все запросы пересылать на бекенд.
    - Бэк,. получающий запрос на index.html или на фавиконку - ОГО, хренасе, отдает неведомую хрень
    - nginx отдает эту неведомую хрень вам полученную с бэка
    
    Чего же надо нам? Мы хотим следующее поведение -
    
    "поищи файл локально, а если нет - то наверное это апи запрос, дерни бекенд"
    
    это в nginx можно сделать пачкой разных способов (потому что nginx старый), самый понятный - try_files
    
    с помощью директивы try_files вы можем сказать nginx буквально "попробуй то, потом то"
    
    Вот нам можно выкинуть location / и вместо этого просто сунуть туда try_files где написать - вначале попробуй статический файл, а потом отправь на бек
    
    для этого надо
    
    - посмотреть в документации синтаксис try_files
    - узнать как сказать "проверь файл на диске" (подсказка - он будет начинаться с доллара)
    - узнать как объявить "отправь на удаленный сервер" - для этого надо будет объявить отдельный upstream и обратиться к этому upstream через собаку в try_files
    
    перед этим конечно же проверить что вначале у нас без всяких try_files отдается статика, потом проверить с try_files с одним элементом, и потом прикручивать апи. А то если пытаться написать весь конфиг сразу это не сработает )
    

```jsx
nginx
nginx -s reload
nginx -s stop
```

### Mac OS

```jsx
Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To restart nginx after an upgrade:
  brew services restart nginx
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/nginx/bin/nginx -g daemon off;
==> Summary
🍺  /usr/local/Cellar/nginx/1.23.4: 26 files, 2.2MB
```

```jsx
usr/local/etc/nginx - тут конфиги
usr/local/Cellar/nginx - тут бинарники nginx (сама программа)

ещё в Downloads сам пакет nginx с дефолтными конфигами (скачал с оф сайта)
```

### Файлы web сервера

- Конфиг `etc/nginx/nginx.conf`
    
    `include /etc/nginx/sites-enabled/*` (включение одного конфига в другой - импорты)
    
- Init-скрипт `etc/init.d/nginx [start|stop|restart]`
- PID-файл - файл с PID процесса для дальнейшей остановки сервера (так как после запуска демон отключается от консоли) `/var/run/nginx.pid`
- Error-log (формат - свободный) `/var/log/nginx/error.log`
- Access-log (успешно/неуспешно обработанные HTTP запросы) - файл имеет жесткий формат и может парситься `/var/log/nginx/access.log`

### Конфигурация web сервера - virtual host, location

Фрагменты конфига

- **virtual host** - секция конфига, которая отвечает за обработку определенного домена. В приложении есть основной домен, домен для мобильного устройства, отдачи статики… Shared hosting - на одном веб-сервере разные клиентские сайты.
- **location** - чтобы каждый URL не прописывать в отдельности - разновидности документов, которые отдает сервер группируют - поэтому это **группа URL’ов, по которым работает сервер** (которые он обслуживает)

```jsx
// имя пользователя и группы, от лица которых будет запущен сервер
user www www;
// файл для ошибок и уровень этих ошибок (напр. info и выше)
error_log /var/log/nginx.error_log info;
// так как nginx может быть любым (напр. прокси), тут показывается
// что он работает в роли http сервера
http {
	// в файле - описание расширений и mime типав файлов
  // для правильной простановки заголовка content type
	include      conf/mime.types;
	// дефолтный тип отдаваемого документа, если не удалось определить
	default_type application/octet-stream;
	// формат access лога - IP URL запроса и статус ответа
	log_format   simple `$remote_addr $request $status`;
	// описание virtual host'a
	server {
		// на каком IP и порту обслуживает данный виртуал хост
		listen      one.example.com;
		// каким доменам данный сервер соответствует
		server_name one.example.com www.one.example.com;
    // чем ниже директива access log, тем выше её приоритет
		access_log  /var/log/nginx.access_log simple;
		// группа урлов - приоритет см. далее
		location / {
			root         /www/one.example.com;
		}
		location ~* ^.+\.(jpg|jpeg|gif)$ {
			root         /www/images;
			access_log   off;
			expires      30d;
		}
	}
}
```

- `http` - контейнер для конфигурации http сервера
- `server` - конфигурация домена (виртуал хоста)
- `server_name` - имена доменов
- `location` - группа обслуживаемых URL’ов
- `root`, `alias` - откуда нужно брать файлы
    
    <aside>
    👉🏼 `alias` работает только с location, который задан по префиксу, а не в виде регулярки
    
    </aside>
    
- `error_log` - файл лога с ошибками сервера
- `access_log` - файл лога с запросами и ответами

Приоритет location в nginx (от высшего к низшему)

- `location = /img/1.jpg` - символ = означает точное совпадение
- `location ^~ /pic/` - сопоставление по префиксу, которое приоритетнее, чем регулярное выражение
- `location ~* \.jpg$` - совпадение по регулярному выражению
- `location /img/` - совпадение по префиксу в урле (если урл начинается с него)

При одинаковом приоритете используется тот location, который находится выше в конфиге.

### Отдача статических файлов

```jsx
location ~* ^.+\.(jpg|jpeg|gif|png)$ {
	root    /www/imgaes; - из какой папки брать файлы
}
location /sitemap/ {
	alias   /home/www/generated;
}
```

`/2015/10/ae2b4.jpg` → `/www/images/2015/10/ae2b4.jpg`

`/sitemap/index.xml` → `/home/www/generated/index.xml`

- ***Пример разных location***
    
    ```jsx
    # совпадение по префиксу - низший приоритет (4)
    location /static {
        # замена пути .../static на этот
        alias    /Users/Phil/Documents/Projects/nginx/public;
    }
    
    location /public-empty {
        root    /Users/Phil/Documents/Projects/nginx;
        # если файла нет, попробуй найти и отдать эти
        try_files /index.html =404;
    }
    
    # точное совпадение - высший приоритет (1)
    location = /main-pic {
        alias    /Users/Phil/Documents/Projects/nginx/public/images/1.jpg;
    }
    
    # регулярка - приоритет (3)
    location ~* ^.+[1-7]\.(jpg|jpeg|png)$ {
        root    /Users/Phil/Documents/Projects/nginx/public/images;
    }
    
    # префикс, который приоритетнее регулярки - приоритет (2)
    location ^~ /pic {
        root    /Users/Phil/Documents/Projects/nginx/public;
    }
    
    location /static-old {
        # redirect - при этом URL заменяется
        return 307 /static;
    }
    
    location /static-new {
        # redirect - при этом URL остается
        rewrite ^ /index.html break;
    }
    
    location /api {
        proxy_pass https://github.com/;
    }
    ```
    

### Настройка проксирования

Nginx в данном случае выступает в роли веб-клиента. Проксирование подразумевает, что будут сохранены заголовки, которые пришли от клиента, а также сохранены и переданы заголовки, пришедшие от бэкенда.

Также часто необходимо добавлять заголовки, например `Host` и `X-Real-IP`. 

- если сохранять Host, который пришел на nginx, то он придет и бэк серверу, хотя он может находиться на другом домене и он не сможет обработать запрос (прописанный в заголовке хост не будет совпадать с хостом бэк сервера)
- при подключении к nginx ему известен IP клиента. Чтобы передать его бэк серверу используется заголовок X-Real-IP (а не IP nginx’a)

```jsx
// config fragment

// подменяем хост (в данном случае он сохраняется)
proxy_set_header Host      $host; // или $proxy_host 
proxy_set_header X-Real-IP $remote_addr;

location / {
	// передать запрос на указанный URL
	// где backend - имя upstream'a
	proxy_pass http://backend;
}

location /partner/ {
	// настоящий URL
	// если запрос типа /partner/doc/1,
	// то итоговый URL - http://www.partner.com/doc/1
	proxy_pass http://www.partner.com;
}

// регулярка для абстрактного файла - его расширение
location ~ \.\w\w\w?\w?$ {
	// отдача с диска из директории www/static
	root /www/static;
}
```

Конфигурирование upstream’ов

Upstream - список серверов, работающих под общем именем (алиас).

- weight - веса, которые характеризуют мощность сервера (чем больше, тем больше)
- max_fails - сколько раз должен не ответить сервер, чтобы убрать его из данного списка. Нужно для балансировки нагрузки.
- помимо IP адресов можно указывать unix сокеты
- backup - опция, которая означает, что данный сервер не должен быть под нагрузкой, а только если другие не могут обслужить запрос

```jsx
upstream backend {
	server back1.example.com:8080 weight=1 max_fails=3;
	server back2.example.com:8080 weight=2;
	server unix:/tmp/backend.sock;
	server backup1.example.com:8080 backup;
}
```

### Avoiding top 10 nginx configuration mistakes

На основе статьи [Avoiding the Top 10 NGINX Configuration Mistakes](https://www.nginx.com/blog/avoiding-top-10-nginx-configuration-mistakes/)

1. Недостаточный лимит количества открытых файловых дескрипторов для одного worker процесса
    
    Его контролирует директива [`worker_connnections`](https://nginx.org/en/docs/ngx_core_module.html#worker_connections) (по дефолту равно 512)
    
    Важная особенность - в это число входит не только количество соединений с клиентами, но также и с другими серверами, если nginx выступает в роли прокси
    
2. 

[Домашка по Nginx](Nginx%20cf303b2df0fa4ada8b7eca302461ffe7/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BA%D0%B0%20%D0%BF%D0%BE%20Nginx%200ee39c3204e84ea4bfd2b07fe108cd2b.md)