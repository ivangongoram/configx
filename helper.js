function bool(value) {
    value = String(value);
    value = value.toLowerCase();
    if (value === 'true' || value === '1') {
      return true;
    }
    else if (value === 'false' || value === '0') {
      return false;
    }
  
    return undefined;
}

module.exports = {bool};