angular.module('app').controller("MainController", function() {
  var self = this;

  self.title = "Yo";

  self.searchInput = '';

  self.books = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favourite: false
    },
    {
      title: 'Harry Potter',
      year: 2002,
      favourite: true
    },
    {
      title: 'Mortal Instruments',
      year: 2008,
      favourite: true
    }
  ];

});