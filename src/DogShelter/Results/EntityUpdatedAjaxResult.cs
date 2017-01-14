namespace TIN.Angular.Results
{
    public class EntityUpdatedAjaxResult : AjaxResult
    {
        public int ModelId { get; }

        public EntityUpdatedAjaxResult(int modelId, string message) : base(true, message)
        {
            ModelId = modelId;
        }
    }
}
