#!/usr/bin/env python
# -*- coding:utf-8 -*-

# 模拟登录，获取数据，整理数据，备份数据，发送邮件

import requests, sys
import pandas as pd
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.header import Header

# Consts
data_account = 'my_account'
data_password = 'my_password'
email_account = 'my_email_account'
email_password = 'my_email_password'
host_url = 'xxx.com'
login_url = 'http://xxx.com/login'
data_url = 'http://xxx.com/data'

# 开 session，之后的 cookies 会一直保存
request = requests.Session()

def login(account, password):
    login_data = {"act": account, "pwd": password}
    headers = {
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
        'Host': host_url,
        'Origin': login_url,
        'Referer': login_url
    }
    request.post(login_url, data = login_data, headers = headers)

def query(begin_date = '2016-09-01', end_date = '2016-09-01'):
    query = {
        'beginDate': begin_date,
        'endDate': end_date
    }
    return query

def get_data(query):
    response = request.get(data_url, params = query)
    data = response.json()
    return data

def clean_data(data):
    date = data['date']
    play = data['play']
    zipped_data = list(zip(date, play))
    df = pd.DataFrame(zipped_data, columns = ['日期', '播放量'])
    return df

def email_data(data):
    from_addr = 'xxx@xxx.com'
    to_addr = 'zzz@zzz.com'
    msg = MIMEMultipart()
    msg['Subject'] = Header('每日播放数据', 'utf-8')
    msg['From'] = from_addr
    msg['To'] = to_addr
    msg.attach(MIMEText(data.to_html(index = False), 'html'))
    # 登录开启了 SMTP 的邮箱
    # SMTP_SSL() <- 对于支持 SSL 的邮箱，要用这个
    server = smtplib.SMTP_SSL('smtp.xxx.com', 465)
    server.login(email_account, email_password)
    server.sendmail(from_addr, to_addr, msg.as_string())
    server.quit()
    print('Success!')

def main():
    login(data_account, data_password)
    play_data = clean_data(get_data(query()))
    # 备份成 CSV 格式，不要序号
    play_data.to_csv('play_data.csv', index=False, header=True)
    email_data(play_data)

if __name__=="__main__":
    main()
