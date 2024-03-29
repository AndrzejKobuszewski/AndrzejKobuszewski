<!DOCTYPE	html>
<html lang="en-EN">
<head>
    
        <meta	charset='utf-8' lang='en-EN'>
        <title>My Resume</title>
        <meta	name='description'	content='andrzej, kobuszewski, program'>
        <meta	name='viewport'	content='width=device-width,	initial-scale=1'>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel='stylesheet' href='./css/main.css'>
        <link rel="shortcut icon" href="https://cdn.pixabay.com/photo/2017/07/08/19/32/symbol-2485367_960_720.png">
        <script src=''></script>
</head>
<body>   
         <main class = "container-fluid">
                <div id="App"></div>
               
                <section id="Kontakt">
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title" id="exampleModalLabel">Nowa wiadomość do Andrzeja:</h5>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                      <form method="POST" id="contact-form">
                                        <div class="modal-body">
                                        
                                            <div class="form-group">
                                                    <label for="exampleInputEmail1">Adres e-mail nadawcy</label>
                                                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mickey@miceservername.com">
                                                    <small id="emailHelp" class="form-text text-muted">Nikomu nie udostępniam adresów e-mail</small>
                                            </div>
                                            <div class="form-group">
                                              <label for="message-text" class="col-form-label">Treść wiadomości:</label>
                                              <textarea class="form-control" name ="MsgContent" id="message-text">Pisz swobodnie. Jak Ci mogę pomóc?</textarea>
                                            </div>
                                       
                                        </div>
                                        <div class="modal-footer">
                                          <button type="button"  class="d-xl-none d-lg-none d-md-none btn btn-secondary"> <a href="callto://+48660675708">Porozmawiajmy</a></button>
                                          <button type="button"  class="btn btn-secondary"> <a style= 'text-decoration: none; color: cornsilk' href='mailto:andrzej@kobuszewski.com?body=Pisz swobodnie. Jak Ci mogę pomóc?&subject=Wiadomość ze strony Kobuszewski.com"'>E-mail</a></button>
                                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                                          <button type="input" class="btn btn-success">Wyślij</button>
                                        </div>
                                      </form>
                                  </div>
                                </div>
                              </div>

                </section>
        </main>
        
<footer></footer>

        

<script src=''></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin>
</script><script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<script src="like_button.js"></script>

<script src="App.js"></script>
<script src="https://www.paypal.com/sdk/js?client-id=AaPLjsg6OyE4g37MyOyJKDvkfBcCxiatVstqJxO7dDGL_zQrAeAOwJ5r1MxSQkdEwLY__KcsBetmGLUE"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
</script>
<script> paypal.Buttons().render('#paypal-button-container')</script>

</body>
