
        // smooth scrolling - onclick to the diff section, it will go 100px above the section to make space for the navbar
        $('#navbar a, .btn').on('click', function (e) {
            if (this.hash !== '')
            {
                e.preventDefault();

                const hash = this.hash;

                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top - 100,
                    },
                    800); 
            }
        });
