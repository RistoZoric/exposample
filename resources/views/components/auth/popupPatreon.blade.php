<div class="popup-main patreon">
    <span class="close-verify-patreon">&#10006;</span>
    <x-ui.container>
        <form>
            <div class="flex flex-col py-12">
                <div class="flex flex-col space-y-2 pt-4">
                    <x-auth.petron-input type="email" name="text" placeholder="{{ __('login.email') }}" id="patreonEmail" />
                    <x-auth.petron-input type="password" name="password" placeholder="{{ __('login.password') }}" id="patreonPassword"/>
                </div>
                <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-8">
                    <x-auth.action-button-verify-submit text="Verify" class="bg-white text-chantilly-500 shadow-sm shadow-glacier-500/30 border-2 border-chantilly-500" id="patreonVerify"/>
                </div>
            </div>
        </form>
    </x-ui.container>
</div>
<script>
$(document).ready(function(){
    $(document).on("click","#ShowpatreonVerify",function(){
        $(".popup-main.patreon").addClass("show");
    });
    $(document).on("click",".close-verify-patreon",function(){
        $(".popup-main.patreon").removeClass("show");
    });
    $(document).on("click","#patreonVerify",function(){
        var email = $("#patreonEmail").val();
        var password = $("#patreonPassword").val();
        $(".patreon-loader").addClass("show");
        console.log( $(".patreon-loader"));
        if(email != "" && password != ""){
            var data = JSON.stringify({
            "_token": "{{ csrf_token() }}",
            "email": email,
            "password": password
               
            });
            var settings = {
                "url": "{{ route('auth.verifyPatreon') }}",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "data": data
            }

            $.ajax(settings).done(function (response) {
                if(response.response.status == 200){
                    toastr.success("patreon account verified.");
                    $(".popup-main.patreon").removeClass("show");
                    $("#patreonEmail").val("");
                    $("#patreonPassword").val("");
                    $("#ShowpatreonVerify span.veryfied").addClass("show");
                    $("#ShowtwitchVerify.button-text").html("Patreon Verified");
                    $("#patreonVerifyInput").val(true);
                    $("#patreonUsername").val(email);
                }else{
                    toastr.error("patreon account not verified.");
                }
            });
        }
        $(".patreon-loader").removeClass("show");
    });
    
});

</script>