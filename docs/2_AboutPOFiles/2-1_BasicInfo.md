---
sidebar_position: 1
---

# 2.1 基础信息

PO 文件主要是 msgid 和 msgstr 一一对应的序列，外加一些单复数情况。

```gettext
#: actionlog/templates/object_action_list.html:8
#. TRANSLATORS: 翻译者们大家好，这是我给你的注释。#: 开头的都是程序源码来的。
msgid "Action"
msgstr "干活"

#  msgid now comes in plurals. 我是个普通的注释，这种由译者留下。
#: foo/templates/bar.html:180
msgid "{0} result"
msgid_plural "{0} results"
msgstr[0] "{0} 个结果"
```
