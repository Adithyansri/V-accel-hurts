jQuery(document).ready(function($) {
    $('#mailchimp-subscribe-form').on('submit', function(e) {
        e.preventDefault();
        const email = $('#email').val();
        const messageDiv = $('#message');
        const contentMailchimp = $('.contentmailchimp');
        messageDiv.html('<div class="process"><img src="https://theninehertz.com/wp-content/themes/ninehertz/assets2024/images/newsletterloader.gif" width="32" height="32" style="width:32px;"></div>').show();
        $.ajax({
            url: mailchimpAjax.ajax_url,
            type: 'POST',
            data: {
                action: 'mailchimp_subscribe',
                email: email,
            },
            success: function(response) {
                if (response.success) {
                    messageDiv.html('<p class="green mb-0"> Thank you for joining our community! </p>')
                } else {
                    messageDiv.html("<p class='red mb-0'> Oops! You're Already Subscribed </p>")
                }
                setTimeout(function() {
                    messageDiv.fadeOut();
                    contentMailchimp.fadeOut();
                    if (response.success) {
                        $('#email').val("");
                        $('#mailchimp-subscribe-form')[0].reset();
                        contentMailchimp.fadeOut()
                    }
                }, 3000)
            },
            error: function() {
                messageDiv.html('<p class="red">An error occurred. Please try again.</p>');
                setTimeout(function() {
                    messageDiv.fadeOut()
                }, 3000)
            },
        })
    })
})