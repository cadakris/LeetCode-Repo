/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = (s) => {
    let a = s.split("|"), res = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            for (const c of a[i]) {
                if (c == '*') res++;
            }
        }
    }
    return (res);
}
