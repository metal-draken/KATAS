let describe = () => {
    let it = function() {
        const found = [true].find(element => element = true);
        assert.equal(found, true)
    };

    let it2 = function() {
        const found = [0, 1, 2].find(item => item > 1);
        assert.equal(found, 2)
    };

    let it3 = function() {
        const found = [1, 2, 3].find(item => item === 5);
        assert.equal(found, void 0);
    };

    let it4 = function() {
        const bob = {name: 'Bob'};
        const alice = {name: 'Alice'};
        const found = [bob, alice].find(({name}) => name);
        assert.equal(found, bob);
    };

  it();
  it2();
  it3();
  it4();
  };
  
  describe();