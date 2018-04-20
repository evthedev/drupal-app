jQuery.ajax({
  type: 'GET',
  url: 'http://statistics.mla.com.au/ReportApi/GetReportList',
  // url: 'http://statistics.mla.com.au/ReportApi/RunReport?ReportGuid=31d6730d-605e-4d08-8734-1871d4911e26',
  success: function (data) {
    var x2js = new X2JS();
    var xmlToJson = x2js.xml_str2json(data.ReturnValue)
    // console.log('xmlToJson: ', xmlToJson)
    console.log('data: ', data)
    
  },
  error: function (request, status, error) {
    if (error) {
      console.log(error);
    }
  }
});
