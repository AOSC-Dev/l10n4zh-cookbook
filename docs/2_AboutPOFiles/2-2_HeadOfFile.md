---
sidebar_position: 2
---

# 2.2 文件头

PO文件必须有一个空msgid的对应值以存储文件头的数据，并且其中有多个必须项。同时，PO文件头
部经常以注释形式表示版权信息。以下是一个范例PO文件头。

PO 文件头的版权信息如下所示：

```gettext
# Simplified Chinese translation for 这啥.
# Copyright (C) 哪几年 这  谁的  .
# This file is distributed under the same license as the 这啥 package.
# Aron Xu <happyaron.xu@gmail.com>, 2011-2015.
# Mingye Wang <arthur200126@hotmail.com>, 2015.
```

不少翻译平台都会强制你填入这些信息。一般来说，第一行是一个大致的描述，第二、三行是版权信息，接下来是翻译者名单。这些信息基本需要手动处理。哪几年的内容一般而言会像 1997,2000-2013, 2015 这样用逗号隔开每一项。一些项目不允许用年份范围，只能一个个列出。

接下来是存储 gettext 元数据的空 msgid 文件头：

```gettext
msgid ""
msgstr ""
"Project-Id-Version: 这啥 0.0.1\n"
"Report-Msgid-Bugs-To: http://滚键盘.cn/bugs.html\n"
"POT-Creation-Date: 2015-07-02 12:31+0000\n"
"PO-Revision-Date: 2015-08-26 23:17+0800\n"
"Last-Translator: Mingye Wang <arthur200126@hotmail.com>\n"
"Language-Team: Chinese (simplified) <i18n-zh@googlegroups.com>\n"
"Language: zh_CN\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"X-Poedit-Basepath: C:/MSYS/source/gcc-4.6.0/gcc\n"
"Plural-Forms: nplurals=1; plural=0;\n"
"X-Generator: Poedit 1.8.4\n"
```

聪明的你很快就会想到，这些东西打印出来之后有一股 HTTP 头味。事情的确就是这样：

- **Project-Id-Version:** 项目名和版本。
- **PO(T)-Revision-Date:** 表示 PO 和 POT 的修改日期。
- **Last-Translator:** 最后的翻译者，发现整出了新锅子就甩给他。大部分编辑器会自动填上，用文本编辑器的话只能手动了。一些翻译平台会检查这个值的电子邮件是否为发件人或在团队中，所以找人代为递交时可能需要填上他人的名字。
- **Language-Team:** 翻译小组名（一般为语言名）和电子邮件地址。新建的时候要手动填一次。
- **Language:** 语言代码，遵循 `语言代码[_国家地区][@特殊属性]` 的格式。
- **Content-Type:** MIME 类型；charset 信息需要符合实际情况。提交应使用 UTF-8 编码。
- **Plural-Forms:** 复数形式，中文的话用 `nplurals=1; plural=0;` 就好——也就是只有一种复数形式，使用的复数形式序号永远是 0。plural其实是一个 C 风格的整数表达式，返回复数形式元素的下标号。如果担心“他们”这种情况，那就改用 `nplurals=2; plural=(n!=1);`。单复数内容含义不严格一致时，翻译依复数原文为准。例如，遇 `Last year` 和 `%d years ago` 成对出现，译 `%d 年前`。和很多其他地方一样，X- 开头的项目表示其他拓展的数据项。
