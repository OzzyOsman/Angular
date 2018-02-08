module.exports = function () {
    var menuObject = element.all(by.css('.navbar-collapse li a'));

    this.Menu = menuObject;

    this.ProductsListMenu = menuObject.get(0);

    this.AddProductMenu = menuObject.get(1);

    this.PriceAnalyticsMenu = menuObject.get(2);

    this.PopOverMenu = menuObject.get(3);
};