#!/usr/bin/env python
# -*- coding:utf-8 -*-

TEST_DATA = [4, 0, 1, 7, 8, 5]

def bubble_sort(data):
    print(data)
    for i in range(len(data) - 1, -1, -1):
        for j in range(i):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
    print(data)

def seletion_sort(data):
    print(data)
    for i in range(0, len(data) - 1):
        min = i
        for j in range(i + 1, len(data)):
            if data[min] > data[j]:
                min = j
        data[i], data[min] = data[min], data[i]
    print(data)

if __name__ == '__main__':
    # 传值给函数，不是传引用
    bubble_sort(TEST_DATA[:])
    seletion_sort(TEST_DATA[:])
