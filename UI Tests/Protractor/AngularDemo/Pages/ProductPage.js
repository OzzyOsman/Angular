module.exports = function() {
   this.InformationButton = element(by.buttonText('Basic Information'));    //0
   this.PriceOptionsButton = element(by.buttonText('Price Details'));       //1
   this.SearchTagsButton = element(by.buttonText('Search Tags'));           //2

   this.CancelButton = element(by.buttonText('Cancel'));
   this.SaveButton = element(by.buttonText('Save'));
};