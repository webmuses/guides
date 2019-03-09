---
layout: default
title: Przygotowanie do Rails Girls
permalink: instalacja
---

# Przygotowanie do Rails Girls
<span class="muted">Czas przygotowania: 5 minut konfiguracji / 15-30 minut instalacji</span>

Aby zacząć budować aplikacje internetowe z Ruby on Rails musimy najpierw przygotować środowisko i zainstalować kilka rzeczy.

Podążaj za instrukcją odpowiednią dla Twojego systemu operacyjnego. Jeśli napotkasz problemy, nie panikuj ;-) Poproś o pomoc najbliższego coacha.

* [Instrukcja dla Windowsa](#instrukcja_dla_windowsa)
* [Instrukcja dla OS X](#instrukcja_dla_os_x)
* [Instrukcja dla Linuksa](#instrukcja_dla_linuksa)

<hr />

## <a name="instrukcja_dla_windowsa"> Instrukcja dla Windowsa </a>

Pobierz [RailsInstaller](https://s3.amazonaws.com/railsinstaller/Windows/railsinstaller-3.4.0.exe) i uruchom. Przejdź kolejne kroki instalatora z domyślnymi ustawieniami.

Jeśli zainstalowana wersja Rails nie jest najowsza, uruchom *Command Prompt with Ruby on Rails* i wpisz poniższe polecenie.

{% highlight sh %}
gem update rails --no-ri --no-rdoc
{% endhighlight %}

Upewnij się, że wszystko działa w porządku uruchamiając następujące polecenie.

{% highlight sh %}
rails new railsgirls
{% endhighlight %}

**Ostatni krok.** Pobierz i zainstaluj edytor tekstu [Sublime Text 3](http://www.sublimetext.com/3)

Twoje środowisko do pracy z Ruby on Rails jest przygotowane. Gratulacje!

<hr />

## <a name="instrukcja_dla_os_x"> Instrukcja dla OS X </a>

**Krok 1.** Na początek sprawdźmy wersję systemu operacyjnego.

Kliknij na Apple menu i wybierz *About this Mac*.

![Apple menu](/images/1.png "Apple menu")

**Krok 2.** W nowym oknie zobaczysz wersję swojego systemu operacyjnego. Jeśli numer wersji zaczyna się od 10.6, 10.7, 10.8 lub 10.9 to ta instrukcja jest dla Ciebie. W przeciwnym wypadku środowisko przygotujemy podczas wydarzenia.

![About this Mac dialog](/images/2.png "About this Mac dialog")

**Krok 3-A.** Ściągnij RailsInstaller dla swojej wersji OS X (dotyczy wersji 10.6, 10.7 lub 10.8):

* [RailsInstaller dla 10.7 lub 10.8](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz) <span class="muted">(325MB)</span>
* [RailsInstaller dla 10.6](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz) <span class="muted">(224MB)</span>

Kliknij dwukrotnie na pobrany plik, aby rozpakował się do aktualnego katalogu. Kliknij dwukrotnie na nowo rozpakowane 'RailsInstaller-1.0.3-osx-10.7.app' lub 'RailsInstaller-1.0.3-osx-10.6.app' i podążaj za instrukcjami. Zostanie otwarty plik README z tytułem 'Rails Installer OS X' na górze. Możesz **zignorować** instrukcje z tego pliku.

Jeśli zainstalowana wersja Rails nie jest najowsza, możemy to zrobić wpisując poniższe polecenie w terminalu.

{% highlight sh %}
gem update rails --no-ri --no-rdoc
{% endhighlight %}

Upewnij się, że wszystko działa w porządku uruchamiając następujące polecenie w terminalu.

{% highlight sh %}
rails new railsgirls
{% endhighlight %}

**Krok 3-B.** Instalacja za pomocą rbenv (dla 10.9):

Jeśli wersja Twojego systemu operacyjnego zaczyna się od 10.9, wykonaj kolejno kroki.

**Krok 3-B-1.** Zainstaluj **Command line tools** w terminalu.

{% highlight sh %}
xcode-select --install
{% endhighlight %}

**Krok 3-B-2.** Zainstaluj [Homebrew](http://brew.sh/):

{% highlight sh %}
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
{% endhighlight %}

**Krok 3-B-3.** Zainstaluj [rbenv](https://github.com/sstephenson/rbenv):

{% highlight sh %}
brew update
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}

**Krok 3-B-4.** Zainstaluj Rubiego za pomocą rbenv:

{% highlight sh %}
rbenv install 2.1.0
{% endhighlight %}

Najnowszą wersję Rubiego znajdziesz przy pomocy polecenia `rbenv install -l`.

Jeśli pojawia Ci się błąd "OpenSSL::SSL::SSLError: ... : certificate verify failed" wykonaj polecenie.

{% highlight sh %}
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

**Krok 3-B-5.** Ustaw domyślną wersję Rubiego:

{% highlight sh %}
rbenv global 2.1.0
{% endhighlight %}

**Krok 3-B-6.** Zainstaluj Ruby on Rails:

{% highlight sh %}
gem install rails
{% endhighlight %}

**Ostatni krok.** Pobierz i zainstaluj edytor tekstu [Sublime Text 3](https://www.sublimetext.com/3)

Twoje środowisko do pracy z Ruby on Rails jest przygotowane. Gratulacje!

<hr />

## <a name="instrukcja_dla_linuksa"> Instrukcja dla Linuksa </a>

Aby zainstalować środowisko do pracy z Ruby on Rails skopiuj linijkę niżej odpowiednio dla Twojej dystrybucji linuksowej (Ubuntu lub Fedora), wklej do terminal i wciśnij Enter. Instalacja może zająć dłuższą chwilę.

**Dla Ubuntu:**

{% highlight sh %}
bash < <(curl -s https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
{% endhighlight %}

**Dla Fedory:**

{% highlight sh %}
bash < <(curl -s https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
{% endhighlight %}

Upewnij się, że wszystko działa w porządku uruchamiając następujące polecenie.

{% highlight sh %}
rails new railsgirls
{% endhighlight %}

**Ostatni krok.** Pobierz i zainstaluj edytor tekstu [Sublime Text 3](https://www.sublimetext.com/3)

Twoje środowisko do pracy z Ruby on Rails jest przygotowane. Gratulacje!

<hr />

