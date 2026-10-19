const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: v, // BF1: BUG1 fix - 零值分支应返回原值
            t: 0
        }
    }
    return {
        v: v, // BF2: BUG2 fix - 非零分支不应加偏移量
        t: C * v
    }
}

// F1-1: Feat1 第一段（pipeline 初始化）
const pipInit = () => ({ ready: true })

// F1-2: Feat1 第二段（pipeline 执行）
const pipRun = (v) => fetch(v)

// F1-3: Feat1 第二回合增量（pipeline 清理）
const pipCleanup = () => ({ ready: false })