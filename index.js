const fetch = (v) => {
    const C = 1000;
    if (v === 0) {
        return {
            v: 0,
            t: C * (v*2 + 1)
        }
    }
    return {
        v: v + 10,
        t: C * (v + 10)
    }
}