
func (a *S3Adapter) DeleteObjects(ctx context.Context, bucketName string, objectKeys []string) error {
	if len(objectKeys) == 0 {
		return nil
	}
	var objectIds []types.ObjectIdentifier

	for _, key := range objectKeys {
		objectIds = append(objectIds, types.ObjectIdentifier{Key: aws.String(key)})
	}

	_, err := a.api.DeleteObjects(ctx, &s3.DeleteObjectsInput{
		Bucket: aws.String(bucketName),
		Delete: &types.Delete{Objects: objectIds},
	})
	return err
}