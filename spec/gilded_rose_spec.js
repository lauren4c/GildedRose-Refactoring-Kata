var { Shop, Item } = require("../src/gilded_rose.js");
describe("Gilded Rose", function() {
  it("should add an item and update the Quality", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("+5 Dexterity Vest");
    expect(items[0].quality).toEqual(19);
  });
  it("should degrade quality twice as fast once sell-by date has passed", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
  });
  it("increase quality for Aged Brie the older it gets", function() {
    //fix me
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });
  it("doesn't decrease sellIn or quality for Sulfuras", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sellIn).toEqual(0);
  });
  it("increases quality by 2 for Backstage Passes when SellIn is less than than 10, but greater than 5", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });
  it("increases quality by 3 for Backstage Passes when SellIn is less than than 5, but greater than 0", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
  });
  it("decreases quality for Backstage Passes to 0 when SellIn 0", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
  it("decreases quality for Conjured twice as fast as normal items", function() {
    const gildedRose = new Shop([
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Elixir of the Mongoose", 2, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(4);
    expect(items[1].quality).toEqual(19);
  });
  it("Quality can never be negative", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 3, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
});
