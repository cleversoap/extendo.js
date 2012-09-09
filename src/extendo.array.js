// Last
Array.prototype.last = function ()
{
    return this[this.length - 1];
};

// COUNT
Array.prototype.count = function (val)
{
    var cnt = 0;
    
    if (this.length > 0)
    {
        var n = this.length - 1;

        do
        {
            if (this[n] === val)
            {
                cnt++;
            }

        }
        while(n--);
    }

    return cnt;
};

// REMOVAL

// Remove element at
Array.prototype.removeAt = function (idx)
{
};

// Remove all elements with value
Array.prototype.removeAll = function (val)
{
};

// Remove nth instance of element
Array.prototype.removeNth = function (val)
{
};
