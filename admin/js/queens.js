'use strict';

$(function () {
  //  Projects table
  let dt_queens_table = $('.datatable-queens');

  if (dt_queens_table.length) {
    let dt_project = dt_queens_table.DataTable({
      ajax:{
        url: '../dummy.json',
        dataSrc: 'queens'
      },
      columns: [
      // "name": "Beasley Love",
      // "bio": "lorem ipsum dome",
      // "subscription_price": 4000,
      // "instant_call_enabled": false,
      // "profile_pic_resource": null,
      // "streak": 4,
      // "Id": 1,
      // "alias": "beas",
      // "user_id": "beasley"
        { data: '' },
        { data: 'name' },
        { data: 'bio' },
        { data: 'subscription_price' },
        { data: 'instant_call_enabled' },
        { data: 'strea' },
        { data: 'id' },
        { data: 'alias' },
        { data: 'user_id' },
      ],
      columnDefs: [
        {
          // For Responsive
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          // For Checkboxes
          targets: 1,
          orderable: false,
          searchable: false,
          responsivePriority: 3,
          checkboxes: true,
          render: function () {
            return '<input type="checkbox" class="dt-checkboxes form-check-input">';
          },
          checkboxes: {
            selectAllRender: '<input type="checkbox" class="form-check-input">'
          }
        },
        {
          targets: 2,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $name = full['name']
            
            let $initials = $name.match(/\b\w/g) || [];
            $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();

            let $output;
            if(full['profile_pic_resource']){
              $output = '<span class="avatar-initial rounded-circle">' + '<img src='+ full['profile_pic_resource'] + '></img>' +'</span>';
            }else{
              $output = '<span class="avatar-initial rounded-circle">' + $initials + '</span>';
            }
            
            // Creates full output for row
            let $row_output =
              '<div class="d-flex justify-content-left align-items-center">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar avatar-sm me-3">' +
              $output +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<span class="text-truncate fw-medium text-heading">' +
              $name +
              '</span>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        {
          targets: 3,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $bio = full['bio'];
            return '<span class="text-heading">' + $bio + '</span>';
          }
        },
        {
          targets: 4,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $price = full['subscription_price']
            return '<span>' + $price + '</span>';
          }
        },
        {
          targets: 5,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $instant_call_enabled = full['instant_call_enabled'];
            return '<span class="text-heading ">' + $instant_call_enabled + '</span>';
          }
        },
        {
          targets: 6,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $id = full['Id'];
            return '<span class="text-heading">' + $id + '</span>';
          }
        },
        {
          targets: 7,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $streak = full['streak'];
            return '<span class="text-heading">' + $streak + '</span>';
          }
        },
        {
          targets: 8,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $alias = full['alias'];
            return '<span class="text-heading">' + $alias + '</span>';
          }
        },
        {
          targets: 9,
          responsivePriority: 4,
          render: function (data, type, full, meta) {
            let $uid = full['user_id'];
            return '<span class="text-heading">' + $uid + '</span>';
          }
        },
      ],
      order: [[2, 'desc']],
      dom: '<"card-header pb-0 pt-sm-0"<"head-label text-center"><"d-flex justify-content-center justify-content-md-end"f>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      displayLength: 7,
      lengthMenu: [7,11, 25, 50, 75, 100],
      language: {
        search: '',
        searchPlaceholder: 'Search User',
        paginate: {
          next: '<i class="ti ti-chevron-right ti-sm"></i>',
          previous: '<i class="ti ti-chevron-left ti-sm"></i>'
        }
      },
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              let data = row.data();
              return 'Details of user "' + data['Name'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            let data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      }
    });
    $('div.head-label').html('<h5 class="card-title mb-0">Users </h5>');
  }

  // Filter form control to default size
  // ? setTimeout used for multilingual table initialization
  setTimeout(() => {
    $('.dataTables_filter .form-control').removeClass('form-control-sm');
    $('.dataTables_length .form-select').removeClass('form-select-sm');
  }, 300);
});
