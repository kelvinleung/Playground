#!/usr/bin/env python
# -*- coding:utf-8 -*-

TEST_DATA = [4, 0, 1, 7, 8, 5]

def bubble_sort(data):
    for i in range(len(data) - 1, -1, -1):
        for j in range(i):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
    print(data)

if __name__ == '__main__':
    bubble_sort(TEST_DATA)
