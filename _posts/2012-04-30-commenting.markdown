---
layout: default
title: Commenting functionality for the Rails Girls app
permalink: commenting
---
# Dodawanie komentarzy w aplikacji Rails Girls
*Created by Janika Liiv, [@janikaliiv](https://twitter.com/janikaliiv)*

Dodamy teraz możliwość dodawania komentarzy do ideas w Twojej aplikacji *railsgirls*.

Jak zainstalować Ruby on Rails i stworzyć aplikację o której mowa dowiesz się [tutaj](/app)

## Krok 1: Stwórz scaffold komentarzy (comment scaffold)

Stwórz scaffold dla komentarzy, zawierający imie komentującego, body komentarza (tekst/zawartość komentarza) z odniesieniem do tabelki ideas (idea_id).
{% highlight sh %}
rails g scaffold comment user_name:string body:text idea_id:integer
{% endhighlight %}

## Krok 2: Dodaj relacje do modeli

Musisz się upewnić, że Railsy znają relację pomiędzy obiektami (ideas i comments). 
Jedno idea może mieć wiele komentarzy (comments), więc musimy się upewnić, że model o tym wie. 
Otwórz app/models/idea.rb i po 
{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}
dodaj
{% highlight ruby %}
has_many :comments
{% endhighlight %}

Comment też musi wiedzieć, że przynależy do jednego idea. Otwórz więc app/models/comment.rb i po
{% highlight ruby %}
class Comment < ActiveRecord::Base
{% endhighlight %}

dodaj
{% highlight ruby %}
belongs_to :idea
{% endhighlight %}

## Krok 3: Wyświetl komentarze

Otwórz app/views/ideas/show.html i za image_tag
{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

dodaj
{% highlight erb %}
<h3>Comments</h3>
<% @idea.comments.each do |comment| %>
  <div>
    <strong><%= comment.user_name %></strong>
    <br />
    <p><%= comment.body %></p>
  </div>
<% end %>
<%= render 'comments/form' %>
{% endhighlight %}

W app/controllers/ideas_controller.rb dodaj po
{% highlight ruby %}
@idea = Idea.find(params[:id])
{% endhighlight %}

następujący kod
{% highlight ruby %}
@comment = @idea.comments.build
{% endhighlight %}

Otwórz app/views/comments/_form.html i po
{% highlight erb %}
  <div class="field">
    <%= f.label :body %><br />
    <%= f.text_area :body %>
  </div>
{% endhighlight %}

dodaj
{% highlight erb %}
<%= f.hidden_field :idea_id %>
{% endhighlight %}

następnie usuń
{% highlight erb %}
<div class="field">
  <%= f.label :idea_id %><br>
  <%= f.number_field :idea_id %>
</div>
{% endhighlight %}

To wszystko. Teraz podziwiaj ideas które stworzyłaś w swojej aplikacji, a zaraz za nimi powinna pojawić się możliwość komentowania ich.
