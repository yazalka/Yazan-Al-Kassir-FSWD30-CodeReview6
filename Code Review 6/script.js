$(document).ready(function () {
	
var Movies = [

				{
					title: 'City lights',
					author: 'Charlie Chaplin',
					Genre: "romantic comedy",
					Publisher: 'United Artists',
					img: "Images/citylights_image.jpg",	
					Minutes: 87   
				},

				{
					title: 'Lawrence of Arabia',
					author: 'T.E.Lawrence',
					Genre: "historical drama",
					Publisher: "Columbia Pictures",
					img: "Images/Lawrence_of_arabia.jpg",	
					Minutes: 222
				},

				{

					title: "Diamond Life",
					author: "Sade",
					Genre: "smooth soul",
					Publisher: "Epic",
					img: "Images/sade-diamond-life.jpg",
					Rating: 5,
					Minutes: 45	

				}

			];


var Books = [  

				{
					title: 'Foundation',
					author: 'Isaac Asimov',
					Genre: "fantasy science fictions",
					Publisher: "Heyne",
					img: "Images/fondation-asimov.jpg",
					Weight: "2 kg",
					Rating: 3 
				},

				{
					title: 'Woodwalkers',
					author: 'Katja Brandis',
					Genre: "belletristik",
					Publisher: "Bild",
					img: "Images/woodwalkers.jpg",
					Weight: "1 kg",
					Rating: 6
				},

				{
					title: 'Modesty Blaise',
					author: 'Peter ODonnell',
					Genre: "mystery",
					Publisher: 'Titan Books',
					img: "Images/modesty1.jpg",
					Weight: "2 kg"
				},	

				{
					title: 'The Sandman',
					author: 'Neil Gaiman',
					Genre: "fantasy",
					Publisher: "Vertigo",
					Weight: "1 kg",
					img: "Images/Sandman.jpg",
				}

			];

var Music =	[

				{
					title: 'Dylan',
					author: 'Bob Dylan',
					Genre: "Rock",
					img: "Images/Bob_Dylan_-_Dylan_(1973_album).jpg",
					Minutes: 34    
				}

			];




	var html=" "; var img; var Title; var Author; var Genre; var Publisher; var Minutes; var Weight;                //  Declaring Variables and giving them a value inside for loop


	for (var i = 0; i < Movies.length; i++) {                                                              //  Moives loop

		img = Movies[i].img;
		Title = "Title: " + Movies[i].title;
		Author = "Author: " + Movies[i].author;
		Genre = "Genre: " + Movies[i].Genre;
		Publisher = "Publisher: " + Movies[i].Publisher;
		Minutes = "Minutes: " + Movies[i].Minutes;

		html += '<div class="col-lg-4 col-md-6 col-12 movie">';                                              // += Operator so it print all Movies not just the last one !
			html +='<div class="row">';
				html +=	'<div class="col-lg-7 col-md-8 col-5 movie_img">';
					html +=	'<img src="' + img + '" alt="Images_citylights_image.jpg">';
				html += '</div>';
				html += '<div class="col-lg-12 col-md-12 col-7 movie_info">';
					html +='<h4>' + Title + '</h4>';
					html += '<p>' + Author + '</p>';
					html += '<p>' + Genre + '</p>';
					html += '<p>' + Publisher + '</p>';
					html += '<p>' + Minutes + '</p>';
				html += '</div>';
			html += '</div>';
		html += '</div>';


		$('.movies_result').html(html);

	}


	html = " ";    //  This one is emptying the elements from the previous loop !!

	for (var i = 0; i < Books.length; i++) {                                                               //  Books loop

		img = Books[i].img;
		Title = "Title: " + Books[i].title;
		Author = "Author: " + Books[i].author;
		Genre = "Genre: " + Books[i].Genre;
		Publisher = "Publisher: " + Books[i].Publisher;
		Weight = "Weight: " + Books[i].Weight;

		html += '<div class="col-lg-4 col-md-6 col-12 book">';
			html +='<div class="row">';
				html +=	'<div class="col-lg-7 col-md-8 col-5 book_img">';
					html +=	'<img src="' + img + '" alt="Images_citylights_image.jpg">';
				html += '</div>';
				html += '<div class="col-lg-12 col-md-12 col-7 book_info">'
					html +='<h4>' + Title + '</h4>';
					html += '<p>' + Author + '</p>';
					html += '<p>' + Genre + '</p>';
					html += '<p>' + Publisher + '</p>';
					html += '<p>' + Weight + '</p>';
				html += '</div>';
			html += '</div>';
		html += '</div>';


		$('.book_result').html(html);

	}


	html = " ";

	for (var i = 0; i < Music.length; i++) {                                                                //  Music loop

		img = Music[i].img;
		Title = "Title: " + Music[i].title;
		Author = "Author: " + Music[i].author;
		Genre = "Genre: " + Music[i].Genre;
		Minutes = "Minutes: " + Music[i].Minutes;

		html += '<div class="col-lg-4 col-md-6 col-12 music">';
			html +='<div class="row">';
					html +=	'<div class="col-lg-7 col-md-8 col-5 music_img">';
						html +=	'<img src="' + img + '" alt="Images_citylights_image.jpg">';
					html += '</div>';
					html += '<div class="col-lg-12 col-md-12 col-7 music_info">';
						html +='<h4>' + Title + '</h4>';
						html += '<p>' + Author + '</p>';
						html += '<p>' + Genre + '</p>';
						html += '<p>' + Minutes + '</p>';
					html += '</div>';
			html += '</div>';
		html += '</div>';


		$('.music_result').html(html);

	}   

});