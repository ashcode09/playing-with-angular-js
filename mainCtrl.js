angular.module('app').controller("MainController", function() {
  var self = this;

  self.title = "Yo";
  self.searchInput = '';
  self.books = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favorite: false
    },
    {
      title: 'Harry Potter',
      year: 2002,
      favorite: true
    },
    {
      title: 'Mortal Instruments',
      year: 2008,
      favorite: true
    }
  ];
});