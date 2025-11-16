const path = require('path');

module.exports = {
  fileUrl(req, filename) {
    // returns accessible url path (assumes static '/uploads' served)
    return filename ? `/uploads/${filename}` : null;
  },

  removeFile(filePath) {
    const fs = require('fs');
    const full = path.resolve(__dirname, '..', '..', filePath.replace(/^\//,'')); // crude
    if (fs.existsSync(full)) fs.unlinkSync(full);
  }
};
