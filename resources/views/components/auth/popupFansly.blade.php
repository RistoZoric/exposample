<div class="popup-main fansly">
    <span class="close-verify-fansly">&#10006;</span>
    <x-ui.container>
        <form>
            <div class="flex flex-col py-12">
                <div class="flex flex-col space-y-2 pt-4">
                    <x-auth.petron-input type="text" name="text" placeholder="{{ __('login.username') }}" id="fanslyUsername" />
                    <x-auth.petron-input type="password" name="password" placeholder="{{ __('login.password') }}" id="fanslyPassword"/>
                </div>
                <div class="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 pt-8">
                    <x-auth.action-button-verify-submit text="Verify" class="bg-white text-chantilly-500 shadow-sm shadow-glacier-500/30 border-2 border-chantilly-500" id="fanslyVerify"/>
                </div>
            </div>
        </form>
    </x-ui.container>
</div>
<script>
$(document).ready(function(){
    $(document).on("click","#ShowfanslyVerify",function(){
        $(".popup-main.fansly").addClass("show");
    });
    $(document).on("click",".close-verify-fansly",function(){
        $(".popup-main.fansly").removeClass("show");
    });
    $(document).on("click","#fanslyVerify",function(){
        var username = $("#fanslyUsername").val();
        var password = $("#fanslyPassword").val();
        $(".patreon-loader").addClass("show");
        console.log( $(".patreon-loader"));
        if(username != "" && password != ""){
            var data = JSON.stringify({
            "_token": "{{ csrf_token() }}",
            "username": username,
            "password": password
               
            });
            var settings = {
                "url": "{{ route('auth.verifyFansly') }}",
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "data": data
            }

            $.ajax(settings).done(function (response) {
                if(response.response.status == 200){
                    toastr.success("Fansly account verified.");
                    $(".popup-main.fansly").removeClass("show");
                    $("#fanslyUsername").val("");
                    $("#fanslyPassword").val("");
                    $("#ShowfanslyVerify span.veryfied").addClass("show");
                    $("#ShowfanslyVerify.button-text").html("Patreon Verified");
                    $("#fanslyVerifyInput").val(true);
                    $("#fanslyUsername").val(username);
                }else{
                    toastr.error("Fansly account not verified.");
                }
            });
        }
        $(".patreon-loader").removeClass("show");
    });
    
});

</script>