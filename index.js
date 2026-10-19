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