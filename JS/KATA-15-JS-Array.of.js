let describe = () => {
    let it = () => {
      const arr = Array.of(10);
      assert.deepEqual(arr, [10]);
      };
    let it2 = () => {
      const arr = Array.of(1,2);
      assert.deepEqual(arr, [1, 2]);
    };
    let it3 = () => {
      const starter = [1, 2];
      const end = [3, '4'];
      const arr = Array.of(...starter, ...end);
      assert.deepEqual(arr, [1, 2, 3, '4']);
    };
  it();
  it2();
  it3();
  };
  
  describe();
