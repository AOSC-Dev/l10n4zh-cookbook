---
sidebar_position: 2
---

# 4.2 Intltool

intltool 工具集实际上是一组脚本，用以实现一些常规的翻译文件维护和与目标 XML 文件的交互。此软件
包一共含五个命令，对于翻译者来说比较常用的是 intltool-update 和 intltool-merge。这组工具多数需要
在完整的源代码树中的 `po/` 子目录下运行。要了解更多关于 intltool 工具的信息，请阅读其手册页。

## 4.2.1 intltool-update：更新 POT 并与 PO 合并

通常使用它生成 POT 文件时使用 `intltool-update -p` 生成一个 POT 文件。

要使用它更新原有的 PO 文件，可以运行 `intltool-update zh_CN`。这样将会自动生成新的 POT 文件并
更新 zh_CN.po，最后得到的文件是更新后的 zh_CN.po，也可以使用 `-o` 选项来定义输出到指定文件而非更新
原来的 PO 文件。

还可以使用它来查看源代码中的 POTFILES 文件是否被正确维护，通常翻译者不需要做这项工作：`intltool-update -m`。如果输出为空则代表一切正常，否则将有详细提示。

## 4.2.2 intltool-merge：交叉合并 PO 和 Gtk XML

`intltool-merge --utf8 PO_DIR INPUT OUTPUT` 其作用为将指定的 PO_DIR 目录中的所有 PO 文件
同 INPUT 文件合并，并将输出写入到 OUTPUT 文件，OUTPUT 文件中包含了 INPUT 文件中的原始字符串和
其他 PO 文件中的已翻译字符串。在进行合并前会把所有文件都自动转换为 UTF-8 编码。

当 INPUT 为一个 XML 文件时，输出的 OUTPUT 文件也将是 XML，PO 文件中翻译的字符串将作为
xml:lang 属性插入到原 XML 中一并写入 OUTPUT 文件。

## 4.2.3 xml2po：双向转换 Gtk XML 和 PO

xml2po 是gnome-doc-utils 中的一个工具，主要用途是在 XML 和 PO 文件之间进行转换和合并。

从 XML 文件生成 POT 文件：

`xml2po -e -o book.pot book.xml`

将已翻译的 zh_CN.po 合并回原来的 XML 文件中：

`/usr/bin/xml2po -e -p zh_CN.po -o book.zh_CN.xml book.xml`
