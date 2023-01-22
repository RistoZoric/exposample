const truncateText = (string, limit) => ((string.length > limit) ? `${string.substr(0, limit - 1)}...` : string);

export default truncateText;
