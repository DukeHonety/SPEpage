function range(start, end, increment = 1) {
    const count = Math.floor((end - start + increment) / increment);
    return Array(count).fill(0).map((_, idx) => start + idx * increment);
  }
  const maxPageSpace = 1200;
  console.log(range(0, 100, 10).reduce((merged, f)=>({...merged, [`${f}p`]: `${f}px`}), {}) );