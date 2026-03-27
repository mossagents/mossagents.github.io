---
layout: default
title: Moss
---

<p class="hero-logo">
  <img src="https://avatars.githubusercontent.com/u/268767877" alt="Moss logo" width="96" height="96">
</p>

# Moss

**Agent harness for Go: compose fast, run safely.**  
**面向 Go 的 Agent Harness：快速装配，安全运行。**

Moss gives you a ready-to-run agent stack (CLI + runtime + extension surface) while keeping the core composable and library-first.  
Moss 提供可直接运行的智能体栈（CLI + Runtime + 扩展面），同时保持核心可组合、可嵌入（library-first）。

> **MossCode**: *A coding-agent harness grounded in your workspace.*  
> **MossCode**：*扎根于你的工作区上下文的代码 Agent Harness。*

---

## What is included / 开箱包含

- Planning and task tracking capabilities  
  任务规划与进度追踪能力
- Filesystem and command execution with trust-level controls  
  带信任级别控制的文件与命令执行
- Sub-agent delegation patterns for multi-agent workflows  
  面向多代理工作流的子代理委派模式
- Interactive TUI and headless run mode  
  交互式 TUI 与非交互执行模式
- Extension-friendly architecture  
  易扩展的运行时架构

---

## Quickstart / 快速开始

```bash
go install github.com/mossagents/moss/cmd/moss@latest
```

```bash
# Interactive TUI
moss

# Non-interactive run
moss run --goal "Fix the bug in main.go" --workspace .

# Version
moss version
```

---

## Build with Go / Go 库集成

```go
package main

import (
	"context"
	"os"

	"github.com/mossagents/moss/appkit"
	"github.com/mossagents/moss/kernel/port"
	"github.com/mossagents/moss/kernel/session"
)

func main() {
	ctx := context.Background()
	k, err := appkit.BuildKernel(ctx, &appkit.AppFlags{
		Provider:  "openai",
		Model:     "gpt-4o",
		Workspace: ".",
		APIKey:    os.Getenv("OPENAI_API_KEY"),
	}, port.NewConsoleIO())
	if err != nil {
		panic(err)
	}

	if err := k.Boot(ctx); err != nil {
		panic(err)
	}
	defer k.Shutdown(ctx)

	sess, err := k.NewSession(ctx, session.SessionConfig{
		Goal:     "Fix the bug in main.go",
		MaxSteps: 50,
	})
	if err != nil {
		panic(err)
	}
	sess.AppendMessage(port.Message{Role: port.RoleUser, Content: "Fix the bug in main.go"})

	if _, err := k.Run(ctx, sess); err != nil {
		panic(err)
	}
}
```

---

## Architecture / 架构

- `kernel/`: runtime primitives (loop, tool, session, middleware, port)  
  `kernel/`：运行时原语（loop、tool、session、middleware、port）
- `appkit/`: high-level assembly helpers  
  `appkit/`：高层装配工具
- `agent/`, `skill/`, `bootstrap/`, `knowledge/`, `scheduler/`, `gateway/`: feature/support packages  
  `agent/`、`skill/`、`bootstrap/`、`knowledge/`、`scheduler/`、`gateway/`：功能与支撑包
- `cmd/moss/`: terminal CLI + TUI  
  `cmd/moss/`：终端 CLI 与 TUI 入口

---

## Documentation / 文档

- [Repository / 仓库](https://github.com/mossagents/moss)
- [README](https://github.com/mossagents/moss/blob/main/README.md)
- [Getting Started / 快速开始](https://github.com/mossagents/moss/blob/main/docs/getting-started.md)
- [Architecture / 架构设计](https://github.com/mossagents/moss/blob/main/docs/architecture.md)
- [Skills / 技能系统](https://github.com/mossagents/moss/blob/main/docs/skills.md)

---

## Examples / 示例

- [mosscode](https://github.com/mossagents/moss/tree/main/examples/mosscode)
- [mosswork](https://github.com/mossagents/moss/tree/main/examples/mosswork)
- [mossclaw](https://github.com/mossagents/moss/tree/main/examples/mossclaw)
- [mossquant](https://github.com/mossagents/moss/tree/main/examples/mossquant)
- [mossroom](https://github.com/mossagents/moss/tree/main/examples/mossroom)

---

## License

MIT

