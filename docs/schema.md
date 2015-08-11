# Schema Information

## siteElements
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
page_id     | integer   | not null, foreign key (references pages)
content     | text      | not null
tag         | string    | not null
classes     | string    | 

## pages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
site_id     | integer   | not null, foreign key (references sites)
title       | text      | not null

## sites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
title       | string    | not null
description | text      |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
