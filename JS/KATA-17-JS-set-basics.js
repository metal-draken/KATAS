let describe = () => {
    let it = function() {
        const typeOfSet = 'function';
        assert.equal(typeOfSet, typeof Set);
    };

    let it2 = function() {
        let set = new Set();
        set.add(1);
        set.add(5);
        const actualSize = 2;
        assert.equal(actualSize, set.size);
    };

    let it3 = function() {
        let set = new Set();
        set.add(1);
        set.add(5);
        assert.equal(set.size, 2);
    };

    let it4 = function() {
        let set = new Set();
        set.add(NaN);
        set.add(NaN);
        assert.equal(set.size, 1);
    };

    let it5 = function() {
        let set = new Set();
        set.add(+0);
        set.add(0);
        set.add('-0');
        assert.deepEqual([...set.values()], [+0,"-0"]);
    };


  it();
  it2();
  it3();
  it4();
  it5();
  };
  
  describe();
  