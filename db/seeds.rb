# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

book1 = Book.find_or_create_by(title: "Les Miserables", author: "Victor Hugo")
book2 = Book.find_or_create_by(title: "The Scarlet Letter", author: "Nathaniel Hawthorne")
book3 = Book.find_or_create_by(title: "The Da Vinci Code", author: "Dan Brown")
book4 = Book.find_or_create_by(title: "Harry Potter and the Sorceror's Stone", author: "J.K. Rowling")
