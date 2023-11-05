function timer(txt) {
  document.getElementById("countdown").innerText = txt;
}

function countdown() {
  timer(10);
  setTimeout(() => {
    timer(9);
    setTimeout(() => {
      timer(8);
      setTimeout(() => {
        timer(7);
        setTimeout(() => {
          timer(6);

          setTimeout(() => {
            timer(5);

            setTimeout(() => {
              timer(4);
              setTimeout(() => {
                timer(5);

                setTimeout(() => {
                  timer(4);
                  setTimeout(() => {
                    timer(3);

                    setTimeout(() => {
                      timer(2);

                      setTimeout(() => {
                        timer(1);

                        setTimeout(() => {
                          timer("HAPPY INDEPENDENCE DAY");
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

countdown();
