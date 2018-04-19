var id_node = null;
$(document).ready(function() {

    $("#datos").hide();

    function ajax_login() {
        $.ajax({
            url: '/api/v1/login/',
            data: $("#formLogin").serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response.status);
                if (response.status === 200)
                    window.location.href = "/dashboard";
                else
                    alert('Invalid User/Password')


            },
            error: function(error) {


            }


        });

    }

    $("#logout").on('click', function(){

        sessionStorage.clear;
        window.location.href = "/";
    });

    $("#formLogin").submit(function(event) {
        event.preventDefault();
        ajax_login();
    });


    $("#scan").on('click', function() {

        $("#gatewayModal").modal('show');

    });

    $(".modify").on('click', function() {

        $("#nodeModal").modal('show');

    });

    $("#signup").on('click', function() {

        $("#signupModal").modal('show');

    });

    $("#button_gateway").on('click', function() {

        $("#gatewayModal").modal('hide');
        $.ajax({
            url: '/api/v1/gateway/',
            data: $("#gatewayForm").serialize(),
            type: 'POST',
            success: function(response) {

                console.log(response);
            },
            error: function(error) {}
        });

        setTimeout(function() {}, 100);
        get_gateway();

    });

    $("#button_register").on('click', function() {

        $("#signupModal").modal('hide');
        $.ajax({
            url: '/api/v1/signup/',
            data: $("#SignupForm").serialize(),
            type: 'POST',
            success: function(response) {

                console.log(response);
                alert(response.data)
            },
            error: function(error) {}
        });

        setTimeout(function() {}, 100);
        get_gateway();

    });

    $("#devices").on('click', function() {
        get_gateway();
    });



    $("#scan_nodes").on('click', function() {
        $.ajax({
            url: '/api/v1/nodes/',
            type: 'GET',
            success: function(response) {

                console.log(response.length);
                var content = $("#nodos")
                for (var i = 0; i < response.length; i++) {

                    $(content).append('<div class="col-sm-4">' +
                        '<table class="table">' +
                        '<thead class="thead-primary"><tr>' +
                        '<th class="bg-primary text-center" scope="col">Node ' + response[i].id + ' </th></tr>' +
                        '</thead><tbody><tr><th scope="row">Name: <p id="n_node' + response[i].id + '" class="d-inline-block"> ' + response[i].name + ' </p></th></tr><tr>' +
                        '<th scope="row">Type: <p id="t_node" class="d-inline-block"> ' + response[i].type + ' </p></th></tr>' +
                        '<tr><th  class= "text-center" scope="row"><button type="button" id="button_node' + response[i].id + '" class="btn btn-danger" onclick="update_node(' + response[i].id + ')">Modify Node</button></th></tr>' +
                        '</tbody> </table></div>');

                }



            },
            error: function(error) {}
        });
    });






    function get_gateway() {

        $.ajax({
            url: '/api/v1/gateway/',
            type: 'GET',
            success: function(response) {

                console.log(response);
                var name = response.name;
                var type = response.type;

                $("#n_gateway").html(name);
                $("#t_gateway").html(type);

                $("#datos").show();

            },
            error: function(error) {}
        });

    }


    $("#button_node").on('click', function() {



        $("#nodeModal").modal('hide');
        $.ajax({
            url: '/api/v1/node/' + id_node,
            data: $("#NodeForm").serialize(),
            type: 'PUT',
            success: function(response) {

                console.log(response);
                alert(response.data);
            },
            error: function(error) {}


        });

    });

    $("#start").on('click', function() {


        $.ajax({
            url: '/api/v1/start/',
            type: 'POST',
            success: function(response) {

                console.log(response);
                alert(response.data)
            },
            error: function(error) {}


        });

    });




});

function update_node(id) {
    console.log("Node ", id);
    $("#nodeModal").modal('show');
    $("#nodeModalTitle").html("Node" + id);
    id_node = id;

}