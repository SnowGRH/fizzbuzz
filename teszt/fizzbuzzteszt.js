QUnit.module("fizbuz", function () {
  QUnit.test("létezik e a fizbuz?", function (assert) {
    assert.ok(fizbuz, "létezik.e a fizbuz?");
  });

  QUnit.test("Hogy tényleg fügvény-e ? ", function (assert) {
    assert.ok(typeof fizbuz === "function", "Függvény ? ");
  });

  QUnit.test("fizbuz(0)", function (assert) {
    assert.equal(fizbuz(0), " ");
  });
  /*  QUnit.test('fizbuz(1)', function(assert) {
        assert.equal(fizbuz(1),1);
      });
      QUnit.test('fizbuz(2)', function(assert) {
        assert.equal(fizbuz(2),'1, 2');
      });
      QUnit.test('fizbuz(3)', function(assert) {
        assert.equal(fizbuz(3),'1, 2, fizz');
      });*/

  QUnit.test(
    "fizbuzertek lista végig menés a nem oszthatokal",
    function (assert) {
      const nemOsztato = [1, 2, 4, 7, 8, 11, 13, 14];
      for (let index = 0; index < nemOsztato.length; index++) {
        assert.equal(fizbuzzErtek(nemOsztato[index]), nemOsztato[index]);
      }
    }
  );
  QUnit.test(
    "fizbuzertek,fizz ,buzz, fizzbuzz vissza adása ??",
    function (assert) {
      const oszthatokal = [3, 5, 6, 9, 10, 12, 15];
      for (let index = 0; index < oszthatokal.length; index++) {
        if (oszthatokal[index] % 5 === 0 && oszthatokal[index] % 3 === 0) {
          assert.equal(
            fizbuzzErtek(oszthatokal[index]),
            "fizzbuzz",
            "fizzbuzz"
          );
        } else if (oszthatokal[index] % 5 === 0) {
          assert.equal(fizbuzzErtek(oszthatokal[index]), "buzz", "buzz");
        } else if (oszthatokal[index] % 3 === 0) {
          assert.equal(
            fizbuzzErtek(oszthatokal[index]),
            "fizz",
            "fizz"
          );
        }
      }
    }
  );
});
