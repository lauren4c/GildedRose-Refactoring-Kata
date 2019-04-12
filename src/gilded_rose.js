class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      //all updates for Backstage Passes
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 10 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 2;
        }
        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        if (this.items[i].sellIn == 0) {
          this.items[i].quality = 0;
        }
      } //end backstage passes
      if (
        this.items[i].quality > 0 &&
        this.items[i].name != "Sulfuras, Hand of Ragnaros" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert" &&
        this.items[i].name != "Aged Brie"
      ) {
        if (this.items[i].quality < 50 && this.items[i].sellIn > 0) {
          if (this.items[i].name == "Conjured Mana Cake") {
            this.items[i].quality = this.items[i].quality - 2;
          } else {
            this.items[i].quality = this.items[i].quality - 1;
          }
        } else if (this.items[i].sellIn == 0) {
          if ((this.items[i].name = "Conjured Mana Cake")) {
            this.items[i].quality = this.items[i].quality - 2;
          } else {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      }
      if (this.items[i].quality < 50 && this.items[i].name == "Aged Brie") {
        this.items[i].quality = this.items[i].quality + 1;
      }
      if (
        this.items[i].sellIn > 0 &&
        this.items[i].name != "Sulfuras, Hand of Ragnaros"
      ) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};
