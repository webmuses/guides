---
layout: default
title: Aplikacja Rails Girls
permalink: aplikacja
---

# Aplikacja Rails Girls

*Autor: Vesa Vänskä, [@vesan](https://twitter.com/vesan)*

**Upewnij się, że masz zainstalowane Ruby on Rails. Jeśli nie, [**zobacz przewodnik instalacji**](/instalacja).**


## Poznaj narzędzia

<div class="indent" markdown="1">

<h3><i class="icon-text-editor">&nbsp;</i></h3>

<h3>Edytor tekstu</h3>

<p><a href="http://www.sublimetext.com/2">Sublime Text 2</a>, <a href="http://komodoide.com/komodo-edit">Komodo Edit</a>, Vim, Emacs lub Gedit są przykładami edytorów tekstowych, w których możesz pisać i edytować kod.</p>

<h3><i class="icon-prompt">&nbsp;</i></h3>

<h3>Terminal (w systemie Windows zwany Wierszem polecenia)</h3>

Program, w którym uruchomisz rails server i wykonasz polecenia.

<h3><i class="icon-browser">&nbsp;</i></h3>

<h3>Przeglądarka internetowa</h3>
Firefox, Safari, Chrome lub inna będzie nam służyć do obejrzenia Twojej aplikacji.

</div>

## *1.*Tworzenie aplikacji

Stworzymy teraz nową aplikację w Railsach, która będzie się nazywać *railsgirls*.

Najpierw otwórzmy terminal:

* Mac OS X: Otwórz Spotlight, wpisz *Terminal*, a następnie kliknij na aplikację *Terminal*.
* Windows: Naciśnij przycisk Start i wyszukaj *Command Prompt*, następnie wybierz *Command Prompt with Ruby on Rails*.
* Linux (Ubuntu/Fedora): Wyszukaj *Terminal* przy pomocy Dasha, następnie kliknij na *Terminal*.

Wpisz następujące polecenie w terminalu:

{% highlight sh %}
mkdir projects
{% endhighlight %}

Aby sprawdzić czy katalog o nazwie <code>projects</code> został utworzony, wykonaj polecenie: <code>ls</code>. Na liście katalogów powinnaś zobaczyć nazwę <code>projects</code>. Przejdźmy do folderu <code>projects</code> za pomocą polecenia:

{% highlight sh %}
cd projects
{% endhighlight %}

Możesz teraz upewnić się, że znajdujesz się w pustym folderze/katalogu poprzez ponowne użycie polecenia <code>ls</code>. Następnie stwórzmy nową aplikację, którą nazwiemy <code>railsgirls</code>. W tym celu wpisz:
{% highlight sh %}
rails new railsgirls
{% endhighlight %}

W ten sposób utworzy się nowa aplikacja wewnątrz folderu <code>railsgirls</code>. Musimy więc ponownie zmienić folder, aby znaleźć się wewnątrz naszej aplikacji:

{% highlight sh %}
cd railsgirls
{% endhighlight %}

Jeżeli wpiszesz teraz <code>ls</code> wewnątrz katalogu, powinnaś zobaczyć foldery o nazwach <code>app</code> i <code>config</code>. Wtedy możesz włączyć serwer rails przy użyciu poleceń:

<div>
{% highlight sh %}
rails server
{% endhighlight %}
</div>

Otwórz [http://localhost:3000](http://localhost:3000) w swojej przeglądarce. Powinnaś zobaczyć tam stronę "Welcome aboard". Jeśli ją widzisz, oznacza to, że Twoja aplikacja została poprawnie wygenerowana.

Zauważ, że w tym oknie Wiersz Poleceń jest niewidoczny, poniewasz znajdujesz się teraz na serwerze Rails. Wiersz poleceń powinien wyglądać teraz w ten sposób:

<div>
{% highlight sh %}
$
{% endhighlight %}
</div>

Kiedy wiersz poleceń jest niewidoczny nie możesz wykonywać nowych poleceń. Jeżeli spróbujesz teraz wpisać `cd` lub jakieś inne polecenie - nie zadziała. Aby powrócić do normalnego wiersza poleceń:

Naciśnij `CTRL-C` w terminalu aby wyłączyć serwer.

**Coach:** Wyjaśnij co robią poszczególne polecenia. Co zostało wygenerowane? Za co odpowiada serwer?


## *2.*Scaffold

W naszej aplikacji skorzystamy ze scaffoldu, aby wygenerować potrzebne rzeczy do wyświetlania listy, dodawania, usuwania, edytowania i przeglądania poszczególnych pomysłów.

**Coach:** Wyjaśnij co to jest scaffold? (Wyjaśnij polecenie, nazwę modelu i związanej tabeli w bazie danych, sposób nazywania, itd.) Do czego służa migracje i dlaczego są potrzebne?

Wykonajmy polecenie:

<div>
{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}
</div>

Scaffold tworzy nowe pliki w naszej aplikacji, ale żeby wszystko działało poprawnie, potrzebujemy wykonać jeszcze dwa dodatkowe polecenia - pierwsze zaktualizuje naszą bazę danych, a drugie uruchomi serwer aplikacji.

<div>
{% highlight sh %}
rake db:migrate
rails server
{% endhighlight %}
</div>

Otwórz [http://localhost:3000/ideas](http://localhost:3000/ideas) w przeglądarce. Poklikaj po stronie, aby zobaczyć, co nowego pojawiło się w naszej aplikacji.

Wciśnij `CTRL-C`, aby zakończyć działanie serwera.


## *3.*Wygląd

**Coach:** Omów związek pomiędzy HTML a Rails. Jaką częścią widoków jest HTML i co to jest ERB? Czym jest MVC i jaki ma z tym związek?

Aplikacja nie wygląda jeszcze najlepiej. Czas coś z tym zrobić. Użyjemy projektu Twitter Bootstrap, żeby szybko otrzymać ładny wygląd.

Otwórz `app/views/layouts/application.html.erb` w swoim edytorze tekstowym i nad linijką

{% highlight erb %}
<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => true %>
{% endhighlight %}

dodaj

{% highlight erb %}
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap.css" />
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap-theme.css" />
{% endhighlight %}

następnie zamień

{% highlight erb %}
<%= yield %>
{% endhighlight %}

na

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

Dodajmy też nawigację i stopkę. W tym samym pliku, pod `<body>` dodaj

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">The Idea app</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/ideas">Ideas</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endhighlight %}

przed `</body>` dodaj

{% highlight html %}
<footer>
  <div class="container">
    Rails Girls 2014
  </div>
</footer>
<script src="//railsgirls.com/assets/bootstrap.js"></script>
{% endhighlight %}

Zmieńmy też wygląd tabelki z ideas. Otwórz `app/assets/stylesheets/application.css` i dodaj na dole

{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle !important; border: none !important; }
th { border-bottom: 1px solid #DDD !important; }
{% endhighlight %}

Upewnij się, że zapisałaś plik, a następnie odśwież przeglądarkę i zobacz co się zmieniło. Możesz pozmieniać więcej za pomocą HTML & CSS.

**Coach:** Powiedz nieco więcej o CSS i layoutach.


## Krok 4: Dodawanie obrazków

Potrzebujemy zainstalować troszeczkę oprogramowania, które pozwoli nam załadowywać pliki w Rails.

Otwórz `Gemfile` w swoim projekcie przy użyciu Twojego edytora tekstu. Pod linijką

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

dodaj

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

**Coach:** Wyjaśnij czym są biblioteki i dlaczego są użyteczne. Opisz czym jest oprogramowanie bazujące na _open source_.

W terminalu wpisz:

{% highlight sh %}
bundle
{% endhighlight %}

Teraz możemy wgenerować kod odpowiedzialny za załadowywanie. W terminalu wpisz:

{% highlight sh %}
rails generate uploader Picture
{% endhighlight %}

W tym momencie musisz **zrestartować wszystkie procesy na serwerze Rails** przy użyciu terminala.

Naciśnij `CTRL-C` w terminalu w celu wyłączenia serweru. Po zatrzymaniu możesz wcisnąć strzałkę w górę żeby wyświetlić ostatnie użyte polecenie. Następnie naciśnij enter żeby ponownie otworzyć serwer.

Jest to niezbędne, aby aplikacja załadowała dodaną przez nas bibliotekę.

Otwórz `app/models/idea.rb`, gdzie pod linijką

{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}

dodaj

{% highlight ruby %}
mount_uploader :picture, PictureUploader
{% endhighlight %}

Otwórz `app/views/ideas/_form.html.erb` i zmień

{% highlight erb %}
<%= f.text_field :picture %>
{% endhighlight %}

na

{% highlight erb %}
<%= f.file_field :picture %>
{% endhighlight %}

Czasami może Ci się pokazać *TypeError: can't cast ActionDispatch::Http::UploadedFile to string*.

W takim przypadku w pliku `app/views/ideas/_form.html.erb` zmień linijkę

{% highlight erb %}
<%= form_for(@idea) do |f| %>
{% endhighlight %}

na

{% highlight erb %}
<%= form_for @idea, :html => {:multipart => true} do |f| %>
{% endhighlight %}

Dodaj nowe idea z obrazkiem przy użyciu swojej przeglądarki. Kiedy załadujesz obrazek nie wygląda on ładnie ponieważ wyświetla się jedynie ścieżka do pliku. Naprawmy to.

Otwórz `app/views/ideas/show.html.erb` i zamień

{% highlight erb %}
<%= @idea.picture %>
{% endhighlight %}

na

{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

Teraz odśwież przeglądarkę i zobacz co się zmieniło.

**Coach:** Powiedz trochę o HTML.


## Krok 5: Dostosowywanie ścieżek

Jeśli spróbujesz otworzyć stronę [http://localhost:3000](http://localhost:3000) ciągle będzie ona pokazywać "Welcome aboard". Zróbmy na niej przekierowanie na naszą stronę z ideas.

Otwórz `config/routes.rb` i po pierwszej linijce kodu dodaj

{% highlight ruby %}
root :to => redirect('/ideas')
{% endhighlight %}

Przetestuj zmianę otwierając root path czyli ścieżkę główną (http://localhost:3000/) w swojej przeglądarce.

**Coach:** Powiedz nieco więcej o ścieżkach. Nie zapomnij wspomnieć o kolejności (dostępu do/wybierania) ścieżek i ich relacji ze statycznymi plikami.

**Rails 3:** Musisz usunąć index.html z folderu `/public/` żeby zadziałało.

## Krok 6: Stwórz statyczną stronę w swojej aplikacji

Dodajmy statyczną stronę do aplikacji, na której będziemy trzymać informacje o autorze tej aplikacji — Tobie!

{% highlight sh %}
rails generate controller pages info
{% endhighlight %}

To polecenie utworzy w pliku `app/views` nowy folder o nazwie `/pages`. Następnie wewnątrz nowego pliku (`/pages`) utworzy jeszcze jeden o nazwie `info.html.erb`, który będzie zawierał dane na Twoją stronę.

Oprócz tego polecenie to doda nową, prostą ścieżkę do routes.rb.

{% highlight ruby %}
get "pages/info"
{% endhighlight %}

Teraz możesz śmiało otworzyć plik `app/views/pages/info.html.erb` i dodać informacje o sobie używając HTMLa. Następnie wejdź w swojej przeglądarce na stronę [http://localhost:3000/pages/info](http://localhost:3000/pages/info) żeby zobaczyć rezultaty.

## Co dalej?

* Ulepsz wygląd używając HTML &amp; CSS.
* Dodaj statystyki/oceny.
* Użyj CoffeeScriptu (albo JavaScriptu) w celu zrobienia bardziej interaktywnej strony.
* Dodaj kompresję obrazków, aby usprawnić ładowanie zdjęć.


## Dodatkowe przewodniki (w języku angielskim)

* [Handy cheatsheet for Ruby, Rails, console etc.](https://github.com/PragTob/rails-beginner-cheatsheet)
* [Go through additional explanations for the App by Lucy Bain](https://github.com/lbain/railsgirls)
