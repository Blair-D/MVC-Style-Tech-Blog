module.exports = {
    // function to format a date & time
    format_date: (date) => {

      // how it will be formatted
      const formatOpt = {hour: 'numeric', month: 'numeric', day: 'numeric', year: 'numeric' };
  
      // format date to style prefered (listed above) in sting fashion
      const dateFormat = new Date(date).toLocaleString('en-US', formatOpt);
  
      // return the formatted date & time
      return dateFormat;
    },
  };