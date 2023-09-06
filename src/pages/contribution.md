---
title: 项目贡献准则（长期征求意见稿）
---

:::note 本页面目前为长期征求意见稿，若有任何建议，欢迎随时联系页面负责人：<vantao@aosc.io>
:::

> 万人操弓，共射其一招，招无不中。  
> ——摘自《吕氏春秋·纪·孟春纪》

首先，非常感谢你愿意参与到**大陆简中自由软件本地化工作指南**站点的建设中，相信通过我们的努力，能够进一步扩大简中互联网的自由软件规模并提高其翻译质量。下列为参与项目建设中需要遵守的准则，当然，如果你有更好的建议，欢迎随时联系页面负责人。

## 1 工作流程图

![l10n-web_workflow.svg](/img/workflow.svg)

## 2 特殊性规范

### 2.1 文章版本划分

> 问：为何要划分版本？  
> 答：不同于 PDF 版本，网站版本的内容更新无法被轻易地追踪。为了使得版本之间更容易区分，故使用 Docusaurus 自带的文章版本冻结功能，实现了与 PDF 同样的版本冻结效果。

关于文章版本划分的具体实现方法，请参考 [Docusaurus 官方文档](https://docusaurus.io/zh-CN/docs/versioning)。

### 2.2 Commit msg 格式

> 未在下文中提及的内容均优先参考通用性规范，若有更好的建议也欢迎提出！

由于本项目网站特殊，故需要对 Commit msg 格式在通用性规范的基础上进行适当修改以及重定义。

#### 2.2.1 Commit Type 参考

- **content**: 对文章内容的更新与修改
- **feat**: 对站点框架结构的功能性更新
- **fix**: 对站点框架结构的功能性修复

## 3 通用性规范

> 本项目借用 [Angular 社区](https://github.com/angular)的 [Issue/PR 贡献规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-submission-guidelines)以及 [Commit msg 格式规范](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format)。  
> 但对于 Commit msg 格式有部分修改，具体修改内容请见[本页面第 2.2 节](/contribution/#22-commit-msg-格式)。

### 3.1 提交 Issue

在你发现下列问题时，请你[前往项目仓库提交 Issue](https://github.com/LWanTao/l10n4zh-cookbook/issues)：

- 发现站点**存在内容错误**，如：某个章节的具体陈述有误、站点内某处显示格式出错…
- 认为**缺失**了能够明显提升站点效用的特性、文档内容…

### 3.2 提交 PR

简单地来说，其实只要你具备**独立完成**你所发现的问题（或未分配贡献者的 Issue），我们非常欢迎你提交 PR。但是若存在下列几种情况，建议你还是先发一个 Issue，并等待其他贡献者的反馈后再进行 PR 相关工作：

- 本次 PR 工程量较大，将耗费你较多的时间与精力，如：增加新的一整个章节内容、增加一个明显改变站点的特性…
