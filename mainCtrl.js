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

  self.ordering = [
    {
      id: 1,
      title: 'Year Ascending',
      key: 'year',
      reverse: false
    },
    {
      id: 2,
      title: 'Year Descending',
      key: 'year',
      reverse: true
    },
    {
      id: 3,
      title: 'Title Ascending',
      key: 'title',
      reverse: false
    },
    {
      id: 4,
      title: 'Title Descending',
      key: 'title',
      reverse: true
    }
  ];

  self.order = self.ordering[0];

});