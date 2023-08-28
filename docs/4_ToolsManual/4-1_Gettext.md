---
sidebar_position: 1
---

# 4.1 Gettext

- 通用参数 `<blah> -o 输出文件名 [-w 行宽度|--no-wrap]`
- 生成机读 `msgfmt --statistics -cv filename.po --check-accelerators[=CHAR] POFILE...`
- 反转机读 `msgunfmt MOFILE...`
- 转移新旧 `msgmerge [--previous] [-C 翻译库.po] [-NU] 旧翻译.po 新模板.pot`
- 转换编码 `msgconv -t UTF-8 old_crappy_big5_or_gb.po`
- 新建翻译 `msginit -l zh_CN example.pot`
- 消息去重 `msguniq FILES...`
- 消息搜索 `msggrep`
