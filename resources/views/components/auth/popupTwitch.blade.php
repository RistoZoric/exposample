<div class="popup-main twitch">
    <span class="close-verify-patreon">&#10006;</span>
    <x-ui.container>
        <form>
            <div class="flex flex-col py-12">
                <div class="flex flex-col space-y-2 pt-4">
                    <x-auth.petron-input type="text" name="username" placeholder="{{ __('login.username') }}" id="twitchUsername" />
                </div>
                <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-8">
                    <x-auth.action-button-verify-submit text="Verify" class="bg-white text-chantilly-500 shadow-sm shadow-glacier-500/30 border-2 border-chantilly-500" id="twitchVerify"/>
                </div>
            </div>
        </form>
    </x-ui.container>
</div>
<script>
$(document).ready(function(){
    $(document).on("click","#ShowtwitchVerify",function(){
        $(".popup-main.twitch").addClass("show");
    });
    $(document).on("click",".close-verify-patreon",function(){
        $(".popup-main.twitch").removeClass("show");
    });
    $(document).on("click","#twitchVerify",function(){
        var username = $("#twitchUsername").val();
        $(".patreon-loader").addClass("show");
        console.log( $(".patreon-loader"));
        if(username != "" ){
            var data = JSON.stringify({
            "_token": "{{ csrf_token() }}",
            "username": username
               
            });
            var settings = {
                "url": "{{ route('auth.verifyTwitch') }}",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "data": data
            }

            $.ajax(settings).done(function (response) {
                var varified = false;
                if(response.response.status == 200){
                    toastr.success("Twitch account verified.");
                    $(".popup-main.twitch").removeClass("show");
                    $("#twitchUsername").val("");
                    $("#ShowtwitchVerify span.veryfied").addClass("show");
                    $("span.twitch-verify-button-text").html("Twitch Verified");
                    $("#twitchVerifyInput").val(true);
                    $("#twitchUsername").val(username);
                }else{
                    toastr.error("Twitch account not verified.");
                }
            });
        }
        $(".patreon-loader").removeClass("show");
    });
    
});

</script>