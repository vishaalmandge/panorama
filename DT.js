$(document).ready(function () {
    $.fn.dataTable.ext.errMode = 'throw';
    var table;
    var obj = '1';
    $("[id*=btnsubmit]").click(function () {
        obj = $.trim($("[id*=lasttrip]").val());
        reloadDT(obj);
    });

    function reloadDT() {
        $.ajax({
            type: 'POST',
            url: 'http://10.21.192.41:7001/api/v1/allGetCalls',
            data: {
                api: 'ts_p_unmatched',
                params: +obj
            },

            /*success: function (data) {
                console.log(data)
            }*/
        });
    }

    function format(driver_data) {
        var a = '';
        var b = '';
        var i;

        for (i = 0; i < driver_data.length; i++) {
            var date = new Date(driver_data[i].starttime);
            var month = date.getMonth() + 1;
            ps = (month.length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
            a = '<table class="table table-bordered table-hover">' + '<thead> <tr> <th>Trip Id</th> <th>Name</th> <th>Source</th> <th>Destination</th> <th>Date/Time</th> </tr> </thead>' + '<tbody>';
            b = b + '<tr>' +
                '<td>' + driver_data[i].d_tripid + '</td>' +
                '<td>' + driver_data[i].employeename + '</td>' +
                '<td>' + driver_data[i].srclocation + '</td>' +
                '<td>' + driver_data[i].destlocation + '</td>' +
                '<td>' + ps + '</td>' +
                '</tr>';
        }
        var final = a + b + '</tbody></table>';
        return final;
    }

    $('#passenger').DataTable({
        "ajax": {
            type: "POST",
            "url": "http://10.21.192.41:7001/api/v1/allGetCalls",
            "data": {
                "api": "ts_p_unmatched",
                "params": +obj
            },

            /*success: function (data) {
                console.log(data)
            },*/
            "dataSrc": "passenger_data",
        },
        statusCode: {
            500: function () {
                alert("Script exhausted");
            }
        },

        "columns": [{
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "request_id"
            },
            {
                "data": "p_tripid"
            },
            {
                "data": "employeename"
            },
            {
                "data": "srclocation"
            },
            {
                "data": "destlocation"

            },
            {
                "data": 'starttime',
                "render": function (data) {
                    var date = new Date(data);
                    var month = date.getMonth() + 1;
                    return (month.length > 1 ? month : "0" + month) + "/" + date.getDate() + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
                }
            },
            {
                data: null,
                className: "center",
                defaultContent: '<a href="JavaScript:void(0);" class="editor_edit" id="opendetails">View</a>'
            },
        ],

        "order": [
            [1, 'asc']
        ],
        "bDestroy": true,

        "columnDefs": [

            {
                "targets": [1],
                "visible": false,
            }

        ],

    });


    // Add event listener for opening and closing details
    $('#passenger tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row

            row.child(format(row.data().driver_data)).show();
            tr.addClass('shown');
        }
    });

    $('#passenger tbody').on('click', 'a', function fn1() {
        var data = table.row($(this).parents('tr')).data();
        localStorage.setItem("passengerreqid", data.request_id)
        window.open('unmatch-details.html', "_blank");
    });

});
