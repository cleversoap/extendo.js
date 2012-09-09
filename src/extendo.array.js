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
    this.splice(idx,1);
};

// Remove first
Array.prototype.removeFirst = function (val)
{
    this.removeAt(this.indexOf(val));
};

// Remove last
Array.prototype.removeLast = function (val)
{
    this.removeAt(this.lastIndexOf(val));
};

// Remove all elements with value
Array.prototype.removeAll = function (val)
{
    while(this.indexOf(val) >= 0)
    {
        this.removeAt(this.indexOf(val));
    }

    return this.length;
};

// Remove nth instance of element
Array.prototype.removeNth = function (val, n)
{
    var cidx = 0;
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] === val)
        {
            if (cidx === n)
            {
                this.removeAt(i);
                break;
            }
            else
            {
                cidx++;
            }
        }
    }
};
