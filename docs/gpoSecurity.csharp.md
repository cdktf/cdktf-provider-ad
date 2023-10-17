# `ad_gpo_security`

Refer to the Terraform Registory for docs: [`ad_gpo_security`](https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security).

# `gpoSecurity` Submodule <a name="`gpoSecurity` Submodule" id="@cdktf/provider-ad.gpoSecurity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GpoSecurity <a name="GpoSecurity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security ad_gpo_security}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurity(Construct Scope, string Id, GpoSecurityConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig">GpoSecurityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout">PutAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog">PutApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog">PutAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit">PutEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem">PutFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy">PutKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies">PutPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys">PutRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues">PutRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups">PutRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog">PutSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices">PutSystemServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout">ResetAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog">ResetApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog">ResetAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit">ResetEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem">ResetFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy">ResetKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies">ResetPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys">ResetRegistryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues">ResetRegistryValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups">ResetRestrictedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog">ResetSystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices">ResetSystemServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAccountLockout` <a name="PutAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout"></a>

```csharp
private void PutAccountLockout(GpoSecurityAccountLockout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAccountLockout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `PutApplicationLog` <a name="PutApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog"></a>

```csharp
private void PutApplicationLog(GpoSecurityApplicationLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putApplicationLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `PutAuditLog` <a name="PutAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog"></a>

```csharp
private void PutAuditLog(GpoSecurityAuditLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putAuditLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `PutEventAudit` <a name="PutEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit"></a>

```csharp
private void PutEventAudit(GpoSecurityEventAudit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putEventAudit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `PutFilesystem` <a name="PutFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem"></a>

```csharp
private void PutFilesystem(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putFilesystem.parameter.value"></a>

- *Type:* object

---

##### `PutKerberosPolicy` <a name="PutKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy"></a>

```csharp
private void PutKerberosPolicy(GpoSecurityKerberosPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putKerberosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `PutPasswordPolicies` <a name="PutPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies"></a>

```csharp
private void PutPasswordPolicies(GpoSecurityPasswordPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putPasswordPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `PutRegistryKeys` <a name="PutRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys"></a>

```csharp
private void PutRegistryKeys(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryKeys.parameter.value"></a>

- *Type:* object

---

##### `PutRegistryValues` <a name="PutRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues"></a>

```csharp
private void PutRegistryValues(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRegistryValues.parameter.value"></a>

- *Type:* object

---

##### `PutRestrictedGroups` <a name="PutRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups"></a>

```csharp
private void PutRestrictedGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putRestrictedGroups.parameter.value"></a>

- *Type:* object

---

##### `PutSystemLog` <a name="PutSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog"></a>

```csharp
private void PutSystemLog(GpoSecuritySystemLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `PutSystemServices` <a name="PutSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices"></a>

```csharp
private void PutSystemServices(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.putSystemServices.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountLockout` <a name="ResetAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAccountLockout"></a>

```csharp
private void ResetAccountLockout()
```

##### `ResetApplicationLog` <a name="ResetApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetApplicationLog"></a>

```csharp
private void ResetApplicationLog()
```

##### `ResetAuditLog` <a name="ResetAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetAuditLog"></a>

```csharp
private void ResetAuditLog()
```

##### `ResetEventAudit` <a name="ResetEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetEventAudit"></a>

```csharp
private void ResetEventAudit()
```

##### `ResetFilesystem` <a name="ResetFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetFilesystem"></a>

```csharp
private void ResetFilesystem()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKerberosPolicy` <a name="ResetKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetKerberosPolicy"></a>

```csharp
private void ResetKerberosPolicy()
```

##### `ResetPasswordPolicies` <a name="ResetPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetPasswordPolicies"></a>

```csharp
private void ResetPasswordPolicies()
```

##### `ResetRegistryKeys` <a name="ResetRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryKeys"></a>

```csharp
private void ResetRegistryKeys()
```

##### `ResetRegistryValues` <a name="ResetRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRegistryValues"></a>

```csharp
private void ResetRegistryValues()
```

##### `ResetRestrictedGroups` <a name="ResetRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetRestrictedGroups"></a>

```csharp
private void ResetRestrictedGroups()
```

##### `ResetSystemLog` <a name="ResetSystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemLog"></a>

```csharp
private void ResetSystemLog()
```

##### `ResetSystemServices` <a name="ResetSystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.resetSystemServices"></a>

```csharp
private void ResetSystemServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

GpoSecurity.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

GpoSecurity.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

GpoSecurity.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

GpoSecurity.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GpoSecurity resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GpoSecurity to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GpoSecurity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GpoSecurity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout">AccountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog">ApplicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit">EventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem">Filesystem</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy">KerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys">RegistryKeys</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues">RegistryValues</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups">RestrictedGroups</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog">SystemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices">SystemServices</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput">AccountLockoutInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput">ApplicationLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput">AuditLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput">EventAuditInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput">FilesystemInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput">GpoContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput">KerberosPolicyInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput">PasswordPoliciesInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput">RegistryKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput">RegistryValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput">RestrictedGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput">SystemLogInput</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput">SystemServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer">GpoContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountLockout`<sup>Required</sup> <a name="AccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockout"></a>

```csharp
public GpoSecurityAccountLockoutOutputReference AccountLockout { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference">GpoSecurityAccountLockoutOutputReference</a>

---

##### `ApplicationLog`<sup>Required</sup> <a name="ApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLog"></a>

```csharp
public GpoSecurityApplicationLogOutputReference ApplicationLog { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference">GpoSecurityApplicationLogOutputReference</a>

---

##### `AuditLog`<sup>Required</sup> <a name="AuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLog"></a>

```csharp
public GpoSecurityAuditLogOutputReference AuditLog { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference">GpoSecurityAuditLogOutputReference</a>

---

##### `EventAudit`<sup>Required</sup> <a name="EventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAudit"></a>

```csharp
public GpoSecurityEventAuditOutputReference EventAudit { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference">GpoSecurityEventAuditOutputReference</a>

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystem"></a>

```csharp
public GpoSecurityFilesystemList Filesystem { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList">GpoSecurityFilesystemList</a>

---

##### `KerberosPolicy`<sup>Required</sup> <a name="KerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicy"></a>

```csharp
public GpoSecurityKerberosPolicyOutputReference KerberosPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference">GpoSecurityKerberosPolicyOutputReference</a>

---

##### `PasswordPolicies`<sup>Required</sup> <a name="PasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPolicies"></a>

```csharp
public GpoSecurityPasswordPoliciesOutputReference PasswordPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference">GpoSecurityPasswordPoliciesOutputReference</a>

---

##### `RegistryKeys`<sup>Required</sup> <a name="RegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeys"></a>

```csharp
public GpoSecurityRegistryKeysList RegistryKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList">GpoSecurityRegistryKeysList</a>

---

##### `RegistryValues`<sup>Required</sup> <a name="RegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValues"></a>

```csharp
public GpoSecurityRegistryValuesList RegistryValues { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList">GpoSecurityRegistryValuesList</a>

---

##### `RestrictedGroups`<sup>Required</sup> <a name="RestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroups"></a>

```csharp
public GpoSecurityRestrictedGroupsList RestrictedGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList">GpoSecurityRestrictedGroupsList</a>

---

##### `SystemLog`<sup>Required</sup> <a name="SystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLog"></a>

```csharp
public GpoSecuritySystemLogOutputReference SystemLog { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference">GpoSecuritySystemLogOutputReference</a>

---

##### `SystemServices`<sup>Required</sup> <a name="SystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServices"></a>

```csharp
public GpoSecuritySystemServicesList SystemServices { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList">GpoSecuritySystemServicesList</a>

---

##### `AccountLockoutInput`<sup>Optional</sup> <a name="AccountLockoutInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.accountLockoutInput"></a>

```csharp
public GpoSecurityAccountLockout AccountLockoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---

##### `ApplicationLogInput`<sup>Optional</sup> <a name="ApplicationLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.applicationLogInput"></a>

```csharp
public GpoSecurityApplicationLog ApplicationLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---

##### `AuditLogInput`<sup>Optional</sup> <a name="AuditLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.auditLogInput"></a>

```csharp
public GpoSecurityAuditLog AuditLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---

##### `EventAuditInput`<sup>Optional</sup> <a name="EventAuditInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.eventAuditInput"></a>

```csharp
public GpoSecurityEventAudit EventAuditInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.filesystemInput"></a>

```csharp
public object FilesystemInput { get; }
```

- *Type:* object

---

##### `GpoContainerInput`<sup>Optional</sup> <a name="GpoContainerInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainerInput"></a>

```csharp
public string GpoContainerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KerberosPolicyInput`<sup>Optional</sup> <a name="KerberosPolicyInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.kerberosPolicyInput"></a>

```csharp
public GpoSecurityKerberosPolicy KerberosPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---

##### `PasswordPoliciesInput`<sup>Optional</sup> <a name="PasswordPoliciesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.passwordPoliciesInput"></a>

```csharp
public GpoSecurityPasswordPolicies PasswordPoliciesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---

##### `RegistryKeysInput`<sup>Optional</sup> <a name="RegistryKeysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryKeysInput"></a>

```csharp
public object RegistryKeysInput { get; }
```

- *Type:* object

---

##### `RegistryValuesInput`<sup>Optional</sup> <a name="RegistryValuesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.registryValuesInput"></a>

```csharp
public object RegistryValuesInput { get; }
```

- *Type:* object

---

##### `RestrictedGroupsInput`<sup>Optional</sup> <a name="RestrictedGroupsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.restrictedGroupsInput"></a>

```csharp
public object RestrictedGroupsInput { get; }
```

- *Type:* object

---

##### `SystemLogInput`<sup>Optional</sup> <a name="SystemLogInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemLogInput"></a>

```csharp
public GpoSecuritySystemLog SystemLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---

##### `SystemServicesInput`<sup>Optional</sup> <a name="SystemServicesInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.systemServicesInput"></a>

```csharp
public object SystemServicesInput { get; }
```

- *Type:* object

---

##### `GpoContainer`<sup>Required</sup> <a name="GpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.gpoContainer"></a>

```csharp
public string GpoContainer { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurity.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GpoSecurityAccountLockout <a name="GpoSecurityAccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityAccountLockout {
    string ForceLogoffWhenHourExpire = null,
    string LockoutBadCount = null,
    string LockoutDuration = null,
    string ResetLockoutCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire">ForceLogoffWhenHourExpire</a></code> | <code>string</code> | Disconnect SMB sessions when logon hours expire. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount">LockoutBadCount</a></code> | <code>string</code> | Number of failed logon attempts until a account is locked. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration">LockoutDuration</a></code> | <code>string</code> | Number of minutes a locked out account must remain locked out. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount">ResetLockoutCount</a></code> | <code>string</code> | Number of minutes a account will remain locked after a failed logon attempt. |

---

##### `ForceLogoffWhenHourExpire`<sup>Optional</sup> <a name="ForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.forceLogoffWhenHourExpire"></a>

```csharp
public string ForceLogoffWhenHourExpire { get; set; }
```

- *Type:* string

Disconnect SMB sessions when logon hours expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#force_logoff_when_hour_expire GpoSecurity#force_logoff_when_hour_expire}

---

##### `LockoutBadCount`<sup>Optional</sup> <a name="LockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutBadCount"></a>

```csharp
public string LockoutBadCount { get; set; }
```

- *Type:* string

Number of failed logon attempts until a account is locked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_bad_count GpoSecurity#lockout_bad_count}

---

##### `LockoutDuration`<sup>Optional</sup> <a name="LockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.lockoutDuration"></a>

```csharp
public string LockoutDuration { get; set; }
```

- *Type:* string

Number of minutes a locked out account must remain locked out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#lockout_duration GpoSecurity#lockout_duration}

---

##### `ResetLockoutCount`<sup>Optional</sup> <a name="ResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout.property.resetLockoutCount"></a>

```csharp
public string ResetLockoutCount { get; set; }
```

- *Type:* string

Number of minutes a account will remain locked after a failed logon attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#reset_lockout_count GpoSecurity#reset_lockout_count}

---

### GpoSecurityApplicationLog <a name="GpoSecurityApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityApplicationLog {
    string AuditLogRetentionPeriod = null,
    string MaximumLogSize = null,
    string RestrictGuestAccess = null,
    string RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays">RetentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; set; }
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; set; }
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; set; }
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog.property.retentionDays"></a>

```csharp
public string RetentionDays { get; set; }
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityAuditLog <a name="GpoSecurityAuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityAuditLog {
    string AuditLogRetentionPeriod = null,
    string MaximumLogSize = null,
    string RestrictGuestAccess = null,
    string RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays">RetentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; set; }
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; set; }
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; set; }
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog.property.retentionDays"></a>

```csharp
public string RetentionDays { get; set; }
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecurityConfig <a name="GpoSecurityConfig" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GpoContainer,
    GpoSecurityAccountLockout AccountLockout = null,
    GpoSecurityApplicationLog ApplicationLog = null,
    GpoSecurityAuditLog AuditLog = null,
    GpoSecurityEventAudit EventAudit = null,
    object Filesystem = null,
    string Id = null,
    GpoSecurityKerberosPolicy KerberosPolicy = null,
    GpoSecurityPasswordPolicies PasswordPolicies = null,
    object RegistryKeys = null,
    object RegistryValues = null,
    object RestrictedGroups = null,
    GpoSecuritySystemLog SystemLog = null,
    object SystemServices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer">GpoContainer</a></code> | <code>string</code> | The GUID of the container the security settings belong to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout">AccountLockout</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | account_lockout block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog">ApplicationLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | application_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog">AuditLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | audit_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit">EventAudit</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | event_audit block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem">Filesystem</a></code> | <code>object</code> | filesystem block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy">KerberosPolicy</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | kerberos_policy block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies">PasswordPolicies</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | password_policies block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys">RegistryKeys</a></code> | <code>object</code> | registry_keys block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues">RegistryValues</a></code> | <code>object</code> | registry_values block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups">RestrictedGroups</a></code> | <code>object</code> | restricted_groups block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog">SystemLog</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | system_log block. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices">SystemServices</a></code> | <code>object</code> | system_services block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GpoContainer`<sup>Required</sup> <a name="GpoContainer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.gpoContainer"></a>

```csharp
public string GpoContainer { get; set; }
```

- *Type:* string

The GUID of the container the security settings belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#gpo_container GpoSecurity#gpo_container}

---

##### `AccountLockout`<sup>Optional</sup> <a name="AccountLockout" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.accountLockout"></a>

```csharp
public GpoSecurityAccountLockout AccountLockout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

account_lockout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#account_lockout GpoSecurity#account_lockout}

---

##### `ApplicationLog`<sup>Optional</sup> <a name="ApplicationLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.applicationLog"></a>

```csharp
public GpoSecurityApplicationLog ApplicationLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

application_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#application_log GpoSecurity#application_log}

---

##### `AuditLog`<sup>Optional</sup> <a name="AuditLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.auditLog"></a>

```csharp
public GpoSecurityAuditLog AuditLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

audit_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log GpoSecurity#audit_log}

---

##### `EventAudit`<sup>Optional</sup> <a name="EventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.eventAudit"></a>

```csharp
public GpoSecurityEventAudit EventAudit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

event_audit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#event_audit GpoSecurity#event_audit}

---

##### `Filesystem`<sup>Optional</sup> <a name="Filesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.filesystem"></a>

```csharp
public object Filesystem { get; set; }
```

- *Type:* object

filesystem block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#filesystem GpoSecurity#filesystem}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#id GpoSecurity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosPolicy`<sup>Optional</sup> <a name="KerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.kerberosPolicy"></a>

```csharp
public GpoSecurityKerberosPolicy KerberosPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

kerberos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#kerberos_policy GpoSecurity#kerberos_policy}

---

##### `PasswordPolicies`<sup>Optional</sup> <a name="PasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.passwordPolicies"></a>

```csharp
public GpoSecurityPasswordPolicies PasswordPolicies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

password_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_policies GpoSecurity#password_policies}

---

##### `RegistryKeys`<sup>Optional</sup> <a name="RegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryKeys"></a>

```csharp
public object RegistryKeys { get; set; }
```

- *Type:* object

registry_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_keys GpoSecurity#registry_keys}

---

##### `RegistryValues`<sup>Optional</sup> <a name="RegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.registryValues"></a>

```csharp
public object RegistryValues { get; set; }
```

- *Type:* object

registry_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#registry_values GpoSecurity#registry_values}

---

##### `RestrictedGroups`<sup>Optional</sup> <a name="RestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.restrictedGroups"></a>

```csharp
public object RestrictedGroups { get; set; }
```

- *Type:* object

restricted_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restricted_groups GpoSecurity#restricted_groups}

---

##### `SystemLog`<sup>Optional</sup> <a name="SystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemLog"></a>

```csharp
public GpoSecuritySystemLog SystemLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

system_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_log GpoSecurity#system_log}

---

##### `SystemServices`<sup>Optional</sup> <a name="SystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityConfig.property.systemServices"></a>

```csharp
public object SystemServices { get; set; }
```

- *Type:* object

system_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#system_services GpoSecurity#system_services}

---

### GpoSecurityEventAudit <a name="GpoSecurityEventAudit" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityEventAudit {
    string AuditAccountLogon = null,
    string AuditAccountManage = null,
    string AuditDsAccess = null,
    string AuditLogonEvents = null,
    string AuditObjectAccess = null,
    string AuditPolicyChange = null,
    string AuditPrivilegeUse = null,
    string AuditProcessTracking = null,
    string AuditSystemEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon">AuditAccountLogon</a></code> | <code>string</code> | Audit credential validation. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage">AuditAccountManage</a></code> | <code>string</code> | Audit account management events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess">AuditDsAccess</a></code> | <code>string</code> | Audit access attempts to AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents">AuditLogonEvents</a></code> | <code>string</code> | Audit logon events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess">AuditObjectAccess</a></code> | <code>string</code> | Audit access attempts to non-AD objects. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange">AuditPolicyChange</a></code> | <code>string</code> | Audit attempts to change a policy. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse">AuditPrivilegeUse</a></code> | <code>string</code> | Audit user attempts of exercising user rights. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking">AuditProcessTracking</a></code> | <code>string</code> | Audit process related events. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents">AuditSystemEvents</a></code> | <code>string</code> | Audit system events. |

---

##### `AuditAccountLogon`<sup>Optional</sup> <a name="AuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountLogon"></a>

```csharp
public string AuditAccountLogon { get; set; }
```

- *Type:* string

Audit credential validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_logon GpoSecurity#audit_account_logon}

---

##### `AuditAccountManage`<sup>Optional</sup> <a name="AuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditAccountManage"></a>

```csharp
public string AuditAccountManage { get; set; }
```

- *Type:* string

Audit account management events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_account_manage GpoSecurity#audit_account_manage}

---

##### `AuditDsAccess`<sup>Optional</sup> <a name="AuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditDsAccess"></a>

```csharp
public string AuditDsAccess { get; set; }
```

- *Type:* string

Audit access attempts to AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_ds_access GpoSecurity#audit_ds_access}

---

##### `AuditLogonEvents`<sup>Optional</sup> <a name="AuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditLogonEvents"></a>

```csharp
public string AuditLogonEvents { get; set; }
```

- *Type:* string

Audit logon events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_logon_events GpoSecurity#audit_logon_events}

---

##### `AuditObjectAccess`<sup>Optional</sup> <a name="AuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditObjectAccess"></a>

```csharp
public string AuditObjectAccess { get; set; }
```

- *Type:* string

Audit access attempts to non-AD objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_object_access GpoSecurity#audit_object_access}

---

##### `AuditPolicyChange`<sup>Optional</sup> <a name="AuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPolicyChange"></a>

```csharp
public string AuditPolicyChange { get; set; }
```

- *Type:* string

Audit attempts to change a policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_policy_change GpoSecurity#audit_policy_change}

---

##### `AuditPrivilegeUse`<sup>Optional</sup> <a name="AuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditPrivilegeUse"></a>

```csharp
public string AuditPrivilegeUse { get; set; }
```

- *Type:* string

Audit user attempts of exercising user rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_privilege_use GpoSecurity#audit_privilege_use}

---

##### `AuditProcessTracking`<sup>Optional</sup> <a name="AuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditProcessTracking"></a>

```csharp
public string AuditProcessTracking { get; set; }
```

- *Type:* string

Audit process related events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_process_tracking GpoSecurity#audit_process_tracking}

---

##### `AuditSystemEvents`<sup>Optional</sup> <a name="AuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit.property.auditSystemEvents"></a>

```csharp
public string AuditSystemEvents { get; set; }
```

- *Type:* string

Audit system events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_system_events GpoSecurity#audit_system_events}

---

### GpoSecurityFilesystem <a name="GpoSecurityFilesystem" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityFilesystem {
    string Acl,
    string Path,
    string PropagationMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl">Acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path">Path</a></code> | <code>string</code> | Path of the file or directory. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode">PropagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Path of the file or directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#path GpoSecurity#path}

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystem.property.propagationMode"></a>

```csharp
public string PropagationMode { get; set; }
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subfolders and files, 1: Replace existing permissions on all subfolders and files, 2: Do not allow permissions to be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityKerberosPolicy <a name="GpoSecurityKerberosPolicy" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityKerberosPolicy {
    string MaxClockSkew = null,
    string MaxRenewAge = null,
    string MaxServiceAge = null,
    string MaxTicketAge = null,
    string TicketValidateClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew">MaxClockSkew</a></code> | <code>string</code> | Maximum time difference, in minutes, between the client clock and the server clock. (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge">MaxRenewAge</a></code> | <code>string</code> | Number of days during which a ticket-granting ticket can be renewed (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge">MaxServiceAge</a></code> | <code>string</code> | Maximum amount of minutes a ticket must be valid to access a service or resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge">MaxTicketAge</a></code> | <code>string</code> | Maximum amount of hours a ticket-granting ticket is valid (0-99999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient">TicketValidateClient</a></code> | <code>string</code> | Control if the session ticket is validated for every request. A non-zero value disables the policy. |

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxClockSkew"></a>

```csharp
public string MaxClockSkew { get; set; }
```

- *Type:* string

Maximum time difference, in minutes, between the client clock and the server clock. (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_clock_skew GpoSecurity#max_clock_skew}

---

##### `MaxRenewAge`<sup>Optional</sup> <a name="MaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxRenewAge"></a>

```csharp
public string MaxRenewAge { get; set; }
```

- *Type:* string

Number of days during which a ticket-granting ticket can be renewed (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_renew_age GpoSecurity#max_renew_age}

---

##### `MaxServiceAge`<sup>Optional</sup> <a name="MaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxServiceAge"></a>

```csharp
public string MaxServiceAge { get; set; }
```

- *Type:* string

Maximum amount of minutes a ticket must be valid to access a service or resource.

Minimum should be 10 and maximum should be equal to `max_ticket_age`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_service_age GpoSecurity#max_service_age}

---

##### `MaxTicketAge`<sup>Optional</sup> <a name="MaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.maxTicketAge"></a>

```csharp
public string MaxTicketAge { get; set; }
```

- *Type:* string

Maximum amount of hours a ticket-granting ticket is valid (0-99999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#max_ticket_age GpoSecurity#max_ticket_age}

---

##### `TicketValidateClient`<sup>Optional</sup> <a name="TicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy.property.ticketValidateClient"></a>

```csharp
public string TicketValidateClient { get; set; }
```

- *Type:* string

Control if the session ticket is validated for every request. A non-zero value disables the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#ticket_validate_client GpoSecurity#ticket_validate_client}

---

### GpoSecurityPasswordPolicies <a name="GpoSecurityPasswordPolicies" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityPasswordPolicies {
    string ClearTextPassword = null,
    string MaximumPasswordAge = null,
    string MinimumPasswordAge = null,
    string MinimumPasswordLength = null,
    string PasswordComplexity = null,
    string PasswordHistorySize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword">ClearTextPassword</a></code> | <code>string</code> | Store password with reversible encryption (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge">MaximumPasswordAge</a></code> | <code>string</code> | Number of days before password expires (-1-999). If set to -1, it means the password never expires. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>string</code> | Number of days a password must be used before changing it (0-999). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>string</code> | Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity">PasswordComplexity</a></code> | <code>string</code> | Password must meet complexity requirements (0-2^16). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize">PasswordHistorySize</a></code> | <code>string</code> | The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16). |

---

##### `ClearTextPassword`<sup>Optional</sup> <a name="ClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.clearTextPassword"></a>

```csharp
public string ClearTextPassword { get; set; }
```

- *Type:* string

Store password with reversible encryption (0-2^16).

The password will not be stored with reversible encryption if the value is set to 0. Reversible encryption will be used in any other case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#clear_text_password GpoSecurity#clear_text_password}

---

##### `MaximumPasswordAge`<sup>Optional</sup> <a name="MaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.maximumPasswordAge"></a>

```csharp
public string MaximumPasswordAge { get; set; }
```

- *Type:* string

Number of days before password expires (-1-999). If set to -1, it means the password never expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_password_age GpoSecurity#maximum_password_age}

---

##### `MinimumPasswordAge`<sup>Optional</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordAge"></a>

```csharp
public string MinimumPasswordAge { get; set; }
```

- *Type:* string

Number of days a password must be used before changing it (0-999).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_age GpoSecurity#minimum_password_age}

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.minimumPasswordLength"></a>

```csharp
public string MinimumPasswordLength { get; set; }
```

- *Type:* string

Minimum number of characters used in a password (0-2^16). If set to 0, it means no password is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#minimum_password_length GpoSecurity#minimum_password_length}

---

##### `PasswordComplexity`<sup>Optional</sup> <a name="PasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordComplexity"></a>

```csharp
public string PasswordComplexity { get; set; }
```

- *Type:* string

Password must meet complexity requirements (0-2^16).

If set to 0, then requirements do not apply, any other value means requirements are applied

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_complexity GpoSecurity#password_complexity}

---

##### `PasswordHistorySize`<sup>Optional</sup> <a name="PasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies.property.passwordHistorySize"></a>

```csharp
public string PasswordHistorySize { get; set; }
```

- *Type:* string

The number of unique new passwords that are required before an old password can be reused in association with a user account (0-2^16).

A value of 0 indicates that the password history is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#password_history_size GpoSecurity#password_history_size}

---

### GpoSecurityRegistryKeys <a name="GpoSecurityRegistryKeys" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryKeys {
    string Acl,
    string KeyName,
    string PropagationMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl">Acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName">KeyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode">PropagationMode</a></code> | <code>string</code> | Control permission propagation. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-3951711      0c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeys.property.propagationMode"></a>

```csharp
public string PropagationMode { get; set; }
```

- *Type:* string

Control permission propagation.

0: Propagate permissions to all subkeys, 1: Replace existing permissions on all subkeys, 2: Do not allow permissions to be replaced on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#propagation_mode GpoSecurity#propagation_mode}

---

### GpoSecurityRegistryValues <a name="GpoSecurityRegistryValues" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryValues {
    string KeyName,
    string Value,
    string ValueType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName">KeyName</a></code> | <code>string</code> | Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value">Value</a></code> | <code>string</code> | The value of the key, matching the type set in `value_type`. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType">ValueType</a></code> | <code>string</code> | Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Fully qualified name of the key (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/97587de7-3524-4291-8527-39517110c0eb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#key_name GpoSecurity#key_name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the key, matching the type set in `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value GpoSecurity#value}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValues.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Data type of the key's value. 1: String, 2: Expand String, 3: Binary, 4: DWORD, 5: MULTI_SZ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#value_type GpoSecurity#value_type}

---

### GpoSecurityRestrictedGroups <a name="GpoSecurityRestrictedGroups" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRestrictedGroups {
    string GroupMemberof,
    string GroupMembers,
    string GroupName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof">GroupMemberof</a></code> | <code>string</code> | Comma separated list of group names or SIDs that this group belongs to. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers">GroupMembers</a></code> | <code>string</code> | Comma separated list of group names or SIDs that are members of the group. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName">GroupName</a></code> | <code>string</code> | Name of the group we are managing. |

---

##### `GroupMemberof`<sup>Required</sup> <a name="GroupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMemberof"></a>

```csharp
public string GroupMemberof { get; set; }
```

- *Type:* string

Comma separated list of group names or SIDs that this group belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_memberof GpoSecurity#group_memberof}

---

##### `GroupMembers`<sup>Required</sup> <a name="GroupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupMembers"></a>

```csharp
public string GroupMembers { get; set; }
```

- *Type:* string

Comma separated list of group names or SIDs that are members of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_members GpoSecurity#group_members}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroups.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Name of the group we are managing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#group_name GpoSecurity#group_name}

---

### GpoSecuritySystemLog <a name="GpoSecuritySystemLog" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecuritySystemLog {
    string AuditLogRetentionPeriod = null,
    string MaximumLogSize = null,
    string RestrictGuestAccess = null,
    string RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | Control log retention. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | Maximum size of log in KiloBytes. (64-4194240). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | Restrict access to logs for guest users. A non-zero value restricts access to guest users. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays">RetentionDays</a></code> | <code>string</code> | Number of days before new events overwrite old events. (1-365). |

---

##### `AuditLogRetentionPeriod`<sup>Optional</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; set; }
```

- *Type:* string

Control log retention.

Values: 0: overwrite events as needed, 1: overwrite events as specified specified by `retention_days`, 2: never overwrite events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#audit_log_retention_period GpoSecurity#audit_log_retention_period}

---

##### `MaximumLogSize`<sup>Optional</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; set; }
```

- *Type:* string

Maximum size of log in KiloBytes. (64-4194240).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#maximum_log_size GpoSecurity#maximum_log_size}

---

##### `RestrictGuestAccess`<sup>Optional</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; set; }
```

- *Type:* string

Restrict access to logs for guest users. A non-zero value restricts access to guest users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#restrict_guest_access GpoSecurity#restrict_guest_access}

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog.property.retentionDays"></a>

```csharp
public string RetentionDays { get; set; }
```

- *Type:* string

Number of days before new events overwrite old events. (1-365).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#retention_days GpoSecurity#retention_days}

---

### GpoSecuritySystemServices <a name="GpoSecuritySystemServices" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecuritySystemServices {
    string Acl,
    string ServiceName,
    string StartupMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl">Acl</a></code> | <code>string</code> | Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070). |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName">ServiceName</a></code> | <code>string</code> | Name of the service. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode">StartupMode</a></code> | <code>string</code> | Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled. |

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Security descriptor to apply. (https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp/f4296d69-1c0f-491f-9587-a960b292d070).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#acl GpoSecurity#acl}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#service_name GpoSecurity#service_name}

---

##### `StartupMode`<sup>Required</sup> <a name="StartupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServices.property.startupMode"></a>

```csharp
public string StartupMode { get; set; }
```

- *Type:* string

Startup mode of the service. Possible values are 2: Automatic, 3: Manual, 4: Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/gpo_security#startup_mode GpoSecurity#startup_mode}

---

## Classes <a name="Classes" id="Classes"></a>

### GpoSecurityAccountLockoutOutputReference <a name="GpoSecurityAccountLockoutOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityAccountLockoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire">ResetForceLogoffWhenHourExpire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount">ResetLockoutBadCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration">ResetLockoutDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount">ResetResetLockoutCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForceLogoffWhenHourExpire` <a name="ResetForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetForceLogoffWhenHourExpire"></a>

```csharp
private void ResetForceLogoffWhenHourExpire()
```

##### `ResetLockoutBadCount` <a name="ResetLockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutBadCount"></a>

```csharp
private void ResetLockoutBadCount()
```

##### `ResetLockoutDuration` <a name="ResetLockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetLockoutDuration"></a>

```csharp
private void ResetLockoutDuration()
```

##### `ResetResetLockoutCount` <a name="ResetResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.resetResetLockoutCount"></a>

```csharp
private void ResetResetLockoutCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput">ForceLogoffWhenHourExpireInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput">LockoutBadCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput">LockoutDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput">ResetLockoutCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire">ForceLogoffWhenHourExpire</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount">LockoutBadCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration">LockoutDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount">ResetLockoutCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForceLogoffWhenHourExpireInput`<sup>Optional</sup> <a name="ForceLogoffWhenHourExpireInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpireInput"></a>

```csharp
public string ForceLogoffWhenHourExpireInput { get; }
```

- *Type:* string

---

##### `LockoutBadCountInput`<sup>Optional</sup> <a name="LockoutBadCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCountInput"></a>

```csharp
public string LockoutBadCountInput { get; }
```

- *Type:* string

---

##### `LockoutDurationInput`<sup>Optional</sup> <a name="LockoutDurationInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDurationInput"></a>

```csharp
public string LockoutDurationInput { get; }
```

- *Type:* string

---

##### `ResetLockoutCountInput`<sup>Optional</sup> <a name="ResetLockoutCountInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCountInput"></a>

```csharp
public string ResetLockoutCountInput { get; }
```

- *Type:* string

---

##### `ForceLogoffWhenHourExpire`<sup>Required</sup> <a name="ForceLogoffWhenHourExpire" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.forceLogoffWhenHourExpire"></a>

```csharp
public string ForceLogoffWhenHourExpire { get; }
```

- *Type:* string

---

##### `LockoutBadCount`<sup>Required</sup> <a name="LockoutBadCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutBadCount"></a>

```csharp
public string LockoutBadCount { get; }
```

- *Type:* string

---

##### `LockoutDuration`<sup>Required</sup> <a name="LockoutDuration" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.lockoutDuration"></a>

```csharp
public string LockoutDuration { get; }
```

- *Type:* string

---

##### `ResetLockoutCount`<sup>Required</sup> <a name="ResetLockoutCount" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.resetLockoutCount"></a>

```csharp
public string ResetLockoutCount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockoutOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityAccountLockout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAccountLockout">GpoSecurityAccountLockout</a>

---


### GpoSecurityApplicationLogOutputReference <a name="GpoSecurityApplicationLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityApplicationLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetAuditLogRetentionPeriod"></a>

```csharp
private void ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetMaximumLogSize"></a>

```csharp
private void ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRestrictGuestAccess"></a>

```csharp
private void ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```csharp
public string AuditLogRetentionPeriodInput { get; }
```

- *Type:* string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSizeInput"></a>

```csharp
public string MaximumLogSizeInput { get; }
```

- *Type:* string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccessInput"></a>

```csharp
public string RestrictGuestAccessInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDaysInput"></a>

```csharp
public string RetentionDaysInput { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; }
```

- *Type:* string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; }
```

- *Type:* string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.retentionDays"></a>

```csharp
public string RetentionDays { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLogOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityApplicationLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityApplicationLog">GpoSecurityApplicationLog</a>

---


### GpoSecurityAuditLogOutputReference <a name="GpoSecurityAuditLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityAuditLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetAuditLogRetentionPeriod"></a>

```csharp
private void ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetMaximumLogSize"></a>

```csharp
private void ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRestrictGuestAccess"></a>

```csharp
private void ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```csharp
public string AuditLogRetentionPeriodInput { get; }
```

- *Type:* string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSizeInput"></a>

```csharp
public string MaximumLogSizeInput { get; }
```

- *Type:* string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccessInput"></a>

```csharp
public string RestrictGuestAccessInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDaysInput"></a>

```csharp
public string RetentionDaysInput { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; }
```

- *Type:* string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; }
```

- *Type:* string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.retentionDays"></a>

```csharp
public string RetentionDays { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLogOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityAuditLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityAuditLog">GpoSecurityAuditLog</a>

---


### GpoSecurityEventAuditOutputReference <a name="GpoSecurityEventAuditOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityEventAuditOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon">ResetAuditAccountLogon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage">ResetAuditAccountManage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess">ResetAuditDsAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents">ResetAuditLogonEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess">ResetAuditObjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange">ResetAuditPolicyChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse">ResetAuditPrivilegeUse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking">ResetAuditProcessTracking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents">ResetAuditSystemEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditAccountLogon` <a name="ResetAuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountLogon"></a>

```csharp
private void ResetAuditAccountLogon()
```

##### `ResetAuditAccountManage` <a name="ResetAuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditAccountManage"></a>

```csharp
private void ResetAuditAccountManage()
```

##### `ResetAuditDsAccess` <a name="ResetAuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditDsAccess"></a>

```csharp
private void ResetAuditDsAccess()
```

##### `ResetAuditLogonEvents` <a name="ResetAuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditLogonEvents"></a>

```csharp
private void ResetAuditLogonEvents()
```

##### `ResetAuditObjectAccess` <a name="ResetAuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditObjectAccess"></a>

```csharp
private void ResetAuditObjectAccess()
```

##### `ResetAuditPolicyChange` <a name="ResetAuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPolicyChange"></a>

```csharp
private void ResetAuditPolicyChange()
```

##### `ResetAuditPrivilegeUse` <a name="ResetAuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditPrivilegeUse"></a>

```csharp
private void ResetAuditPrivilegeUse()
```

##### `ResetAuditProcessTracking` <a name="ResetAuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditProcessTracking"></a>

```csharp
private void ResetAuditProcessTracking()
```

##### `ResetAuditSystemEvents` <a name="ResetAuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.resetAuditSystemEvents"></a>

```csharp
private void ResetAuditSystemEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput">AuditAccountLogonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput">AuditAccountManageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput">AuditDsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput">AuditLogonEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput">AuditObjectAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput">AuditPolicyChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput">AuditPrivilegeUseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput">AuditProcessTrackingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput">AuditSystemEventsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon">AuditAccountLogon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage">AuditAccountManage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess">AuditDsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents">AuditLogonEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess">AuditObjectAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange">AuditPolicyChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse">AuditPrivilegeUse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking">AuditProcessTracking</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents">AuditSystemEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditAccountLogonInput`<sup>Optional</sup> <a name="AuditAccountLogonInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogonInput"></a>

```csharp
public string AuditAccountLogonInput { get; }
```

- *Type:* string

---

##### `AuditAccountManageInput`<sup>Optional</sup> <a name="AuditAccountManageInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManageInput"></a>

```csharp
public string AuditAccountManageInput { get; }
```

- *Type:* string

---

##### `AuditDsAccessInput`<sup>Optional</sup> <a name="AuditDsAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccessInput"></a>

```csharp
public string AuditDsAccessInput { get; }
```

- *Type:* string

---

##### `AuditLogonEventsInput`<sup>Optional</sup> <a name="AuditLogonEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEventsInput"></a>

```csharp
public string AuditLogonEventsInput { get; }
```

- *Type:* string

---

##### `AuditObjectAccessInput`<sup>Optional</sup> <a name="AuditObjectAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccessInput"></a>

```csharp
public string AuditObjectAccessInput { get; }
```

- *Type:* string

---

##### `AuditPolicyChangeInput`<sup>Optional</sup> <a name="AuditPolicyChangeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChangeInput"></a>

```csharp
public string AuditPolicyChangeInput { get; }
```

- *Type:* string

---

##### `AuditPrivilegeUseInput`<sup>Optional</sup> <a name="AuditPrivilegeUseInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUseInput"></a>

```csharp
public string AuditPrivilegeUseInput { get; }
```

- *Type:* string

---

##### `AuditProcessTrackingInput`<sup>Optional</sup> <a name="AuditProcessTrackingInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTrackingInput"></a>

```csharp
public string AuditProcessTrackingInput { get; }
```

- *Type:* string

---

##### `AuditSystemEventsInput`<sup>Optional</sup> <a name="AuditSystemEventsInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEventsInput"></a>

```csharp
public string AuditSystemEventsInput { get; }
```

- *Type:* string

---

##### `AuditAccountLogon`<sup>Required</sup> <a name="AuditAccountLogon" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountLogon"></a>

```csharp
public string AuditAccountLogon { get; }
```

- *Type:* string

---

##### `AuditAccountManage`<sup>Required</sup> <a name="AuditAccountManage" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditAccountManage"></a>

```csharp
public string AuditAccountManage { get; }
```

- *Type:* string

---

##### `AuditDsAccess`<sup>Required</sup> <a name="AuditDsAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditDsAccess"></a>

```csharp
public string AuditDsAccess { get; }
```

- *Type:* string

---

##### `AuditLogonEvents`<sup>Required</sup> <a name="AuditLogonEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditLogonEvents"></a>

```csharp
public string AuditLogonEvents { get; }
```

- *Type:* string

---

##### `AuditObjectAccess`<sup>Required</sup> <a name="AuditObjectAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditObjectAccess"></a>

```csharp
public string AuditObjectAccess { get; }
```

- *Type:* string

---

##### `AuditPolicyChange`<sup>Required</sup> <a name="AuditPolicyChange" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPolicyChange"></a>

```csharp
public string AuditPolicyChange { get; }
```

- *Type:* string

---

##### `AuditPrivilegeUse`<sup>Required</sup> <a name="AuditPrivilegeUse" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditPrivilegeUse"></a>

```csharp
public string AuditPrivilegeUse { get; }
```

- *Type:* string

---

##### `AuditProcessTracking`<sup>Required</sup> <a name="AuditProcessTracking" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditProcessTracking"></a>

```csharp
public string AuditProcessTracking { get; }
```

- *Type:* string

---

##### `AuditSystemEvents`<sup>Required</sup> <a name="AuditSystemEvents" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.auditSystemEvents"></a>

```csharp
public string AuditSystemEvents { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAuditOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityEventAudit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityEventAudit">GpoSecurityEventAudit</a>

---


### GpoSecurityFilesystemList <a name="GpoSecurityFilesystemList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityFilesystemList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get"></a>

```csharp
private GpoSecurityFilesystemOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityFilesystemOutputReference <a name="GpoSecurityFilesystemOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityFilesystemOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput">PropagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode">PropagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PropagationModeInput`<sup>Optional</sup> <a name="PropagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationModeInput"></a>

```csharp
public string PropagationModeInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.propagationMode"></a>

```csharp
public string PropagationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityFilesystemOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityKerberosPolicyOutputReference <a name="GpoSecurityKerberosPolicyOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityKerberosPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge">ResetMaxRenewAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge">ResetMaxServiceAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge">ResetMaxTicketAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient">ResetTicketValidateClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetMaxRenewAge` <a name="ResetMaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxRenewAge"></a>

```csharp
private void ResetMaxRenewAge()
```

##### `ResetMaxServiceAge` <a name="ResetMaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxServiceAge"></a>

```csharp
private void ResetMaxServiceAge()
```

##### `ResetMaxTicketAge` <a name="ResetMaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetMaxTicketAge"></a>

```csharp
private void ResetMaxTicketAge()
```

##### `ResetTicketValidateClient` <a name="ResetTicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.resetTicketValidateClient"></a>

```csharp
private void ResetTicketValidateClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput">MaxRenewAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput">MaxServiceAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput">MaxTicketAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput">TicketValidateClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew">MaxClockSkew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge">MaxRenewAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge">MaxServiceAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge">MaxTicketAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient">TicketValidateClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkewInput"></a>

```csharp
public string MaxClockSkewInput { get; }
```

- *Type:* string

---

##### `MaxRenewAgeInput`<sup>Optional</sup> <a name="MaxRenewAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAgeInput"></a>

```csharp
public string MaxRenewAgeInput { get; }
```

- *Type:* string

---

##### `MaxServiceAgeInput`<sup>Optional</sup> <a name="MaxServiceAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAgeInput"></a>

```csharp
public string MaxServiceAgeInput { get; }
```

- *Type:* string

---

##### `MaxTicketAgeInput`<sup>Optional</sup> <a name="MaxTicketAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAgeInput"></a>

```csharp
public string MaxTicketAgeInput { get; }
```

- *Type:* string

---

##### `TicketValidateClientInput`<sup>Optional</sup> <a name="TicketValidateClientInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClientInput"></a>

```csharp
public string TicketValidateClientInput { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxClockSkew"></a>

```csharp
public string MaxClockSkew { get; }
```

- *Type:* string

---

##### `MaxRenewAge`<sup>Required</sup> <a name="MaxRenewAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxRenewAge"></a>

```csharp
public string MaxRenewAge { get; }
```

- *Type:* string

---

##### `MaxServiceAge`<sup>Required</sup> <a name="MaxServiceAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxServiceAge"></a>

```csharp
public string MaxServiceAge { get; }
```

- *Type:* string

---

##### `MaxTicketAge`<sup>Required</sup> <a name="MaxTicketAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.maxTicketAge"></a>

```csharp
public string MaxTicketAge { get; }
```

- *Type:* string

---

##### `TicketValidateClient`<sup>Required</sup> <a name="TicketValidateClient" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.ticketValidateClient"></a>

```csharp
public string TicketValidateClient { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicyOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityKerberosPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityKerberosPolicy">GpoSecurityKerberosPolicy</a>

---


### GpoSecurityPasswordPoliciesOutputReference <a name="GpoSecurityPasswordPoliciesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityPasswordPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword">ResetClearTextPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge">ResetMaximumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge">ResetMinimumPasswordAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity">ResetPasswordComplexity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize">ResetPasswordHistorySize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClearTextPassword` <a name="ResetClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetClearTextPassword"></a>

```csharp
private void ResetClearTextPassword()
```

##### `ResetMaximumPasswordAge` <a name="ResetMaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMaximumPasswordAge"></a>

```csharp
private void ResetMaximumPasswordAge()
```

##### `ResetMinimumPasswordAge` <a name="ResetMinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordAge"></a>

```csharp
private void ResetMinimumPasswordAge()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetMinimumPasswordLength"></a>

```csharp
private void ResetMinimumPasswordLength()
```

##### `ResetPasswordComplexity` <a name="ResetPasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordComplexity"></a>

```csharp
private void ResetPasswordComplexity()
```

##### `ResetPasswordHistorySize` <a name="ResetPasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.resetPasswordHistorySize"></a>

```csharp
private void ResetPasswordHistorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput">ClearTextPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput">MaximumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput">MinimumPasswordAgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput">PasswordComplexityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput">PasswordHistorySizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword">ClearTextPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge">MaximumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge">MinimumPasswordAge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity">PasswordComplexity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize">PasswordHistorySize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClearTextPasswordInput`<sup>Optional</sup> <a name="ClearTextPasswordInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPasswordInput"></a>

```csharp
public string ClearTextPasswordInput { get; }
```

- *Type:* string

---

##### `MaximumPasswordAgeInput`<sup>Optional</sup> <a name="MaximumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAgeInput"></a>

```csharp
public string MaximumPasswordAgeInput { get; }
```

- *Type:* string

---

##### `MinimumPasswordAgeInput`<sup>Optional</sup> <a name="MinimumPasswordAgeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAgeInput"></a>

```csharp
public string MinimumPasswordAgeInput { get; }
```

- *Type:* string

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLengthInput"></a>

```csharp
public string MinimumPasswordLengthInput { get; }
```

- *Type:* string

---

##### `PasswordComplexityInput`<sup>Optional</sup> <a name="PasswordComplexityInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexityInput"></a>

```csharp
public string PasswordComplexityInput { get; }
```

- *Type:* string

---

##### `PasswordHistorySizeInput`<sup>Optional</sup> <a name="PasswordHistorySizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySizeInput"></a>

```csharp
public string PasswordHistorySizeInput { get; }
```

- *Type:* string

---

##### `ClearTextPassword`<sup>Required</sup> <a name="ClearTextPassword" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.clearTextPassword"></a>

```csharp
public string ClearTextPassword { get; }
```

- *Type:* string

---

##### `MaximumPasswordAge`<sup>Required</sup> <a name="MaximumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.maximumPasswordAge"></a>

```csharp
public string MaximumPasswordAge { get; }
```

- *Type:* string

---

##### `MinimumPasswordAge`<sup>Required</sup> <a name="MinimumPasswordAge" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordAge"></a>

```csharp
public string MinimumPasswordAge { get; }
```

- *Type:* string

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.minimumPasswordLength"></a>

```csharp
public string MinimumPasswordLength { get; }
```

- *Type:* string

---

##### `PasswordComplexity`<sup>Required</sup> <a name="PasswordComplexity" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordComplexity"></a>

```csharp
public string PasswordComplexity { get; }
```

- *Type:* string

---

##### `PasswordHistorySize`<sup>Required</sup> <a name="PasswordHistorySize" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.passwordHistorySize"></a>

```csharp
public string PasswordHistorySize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPoliciesOutputReference.property.internalValue"></a>

```csharp
public GpoSecurityPasswordPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityPasswordPolicies">GpoSecurityPasswordPolicies</a>

---


### GpoSecurityRegistryKeysList <a name="GpoSecurityRegistryKeysList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get"></a>

```csharp
private GpoSecurityRegistryKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityRegistryKeysOutputReference <a name="GpoSecurityRegistryKeysOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput">PropagationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode">PropagationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `PropagationModeInput`<sup>Optional</sup> <a name="PropagationModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationModeInput"></a>

```csharp
public string PropagationModeInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `PropagationMode`<sup>Required</sup> <a name="PropagationMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.propagationMode"></a>

```csharp
public string PropagationMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityRegistryValuesList <a name="GpoSecurityRegistryValuesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get"></a>

```csharp
private GpoSecurityRegistryValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityRegistryValuesOutputReference <a name="GpoSecurityRegistryValuesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRegistryValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRegistryValuesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityRestrictedGroupsList <a name="GpoSecurityRestrictedGroupsList" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRestrictedGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get"></a>

```csharp
private GpoSecurityRestrictedGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecurityRestrictedGroupsOutputReference <a name="GpoSecurityRestrictedGroupsOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecurityRestrictedGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput">GroupMemberofInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput">GroupMembersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof">GroupMemberof</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers">GroupMembers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupMemberofInput`<sup>Optional</sup> <a name="GroupMemberofInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberofInput"></a>

```csharp
public string GroupMemberofInput { get; }
```

- *Type:* string

---

##### `GroupMembersInput`<sup>Optional</sup> <a name="GroupMembersInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembersInput"></a>

```csharp
public string GroupMembersInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `GroupMemberof`<sup>Required</sup> <a name="GroupMemberof" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMemberof"></a>

```csharp
public string GroupMemberof { get; }
```

- *Type:* string

---

##### `GroupMembers`<sup>Required</sup> <a name="GroupMembers" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupMembers"></a>

```csharp
public string GroupMembers { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecurityRestrictedGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecuritySystemLogOutputReference <a name="GpoSecuritySystemLogOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecuritySystemLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod">ResetAuditLogRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize">ResetMaximumLogSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess">ResetRestrictGuestAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuditLogRetentionPeriod` <a name="ResetAuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetAuditLogRetentionPeriod"></a>

```csharp
private void ResetAuditLogRetentionPeriod()
```

##### `ResetMaximumLogSize` <a name="ResetMaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetMaximumLogSize"></a>

```csharp
private void ResetMaximumLogSize()
```

##### `ResetRestrictGuestAccess` <a name="ResetRestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRestrictGuestAccess"></a>

```csharp
private void ResetRestrictGuestAccess()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput">AuditLogRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput">MaximumLogSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput">RestrictGuestAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod">AuditLogRetentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize">MaximumLogSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess">RestrictGuestAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays">RetentionDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriodInput`<sup>Optional</sup> <a name="AuditLogRetentionPeriodInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriodInput"></a>

```csharp
public string AuditLogRetentionPeriodInput { get; }
```

- *Type:* string

---

##### `MaximumLogSizeInput`<sup>Optional</sup> <a name="MaximumLogSizeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSizeInput"></a>

```csharp
public string MaximumLogSizeInput { get; }
```

- *Type:* string

---

##### `RestrictGuestAccessInput`<sup>Optional</sup> <a name="RestrictGuestAccessInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccessInput"></a>

```csharp
public string RestrictGuestAccessInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDaysInput"></a>

```csharp
public string RetentionDaysInput { get; }
```

- *Type:* string

---

##### `AuditLogRetentionPeriod`<sup>Required</sup> <a name="AuditLogRetentionPeriod" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.auditLogRetentionPeriod"></a>

```csharp
public string AuditLogRetentionPeriod { get; }
```

- *Type:* string

---

##### `MaximumLogSize`<sup>Required</sup> <a name="MaximumLogSize" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.maximumLogSize"></a>

```csharp
public string MaximumLogSize { get; }
```

- *Type:* string

---

##### `RestrictGuestAccess`<sup>Required</sup> <a name="RestrictGuestAccess" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.restrictGuestAccess"></a>

```csharp
public string RestrictGuestAccess { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.retentionDays"></a>

```csharp
public string RetentionDays { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLogOutputReference.property.internalValue"></a>

```csharp
public GpoSecuritySystemLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemLog">GpoSecuritySystemLog</a>

---


### GpoSecuritySystemServicesList <a name="GpoSecuritySystemServicesList" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecuritySystemServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get"></a>

```csharp
private GpoSecuritySystemServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GpoSecuritySystemServicesOutputReference <a name="GpoSecuritySystemServicesOutputReference" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ad;

new GpoSecuritySystemServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput">StartupModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode">StartupMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `StartupModeInput`<sup>Optional</sup> <a name="StartupModeInput" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupModeInput"></a>

```csharp
public string StartupModeInput { get; }
```

- *Type:* string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `StartupMode`<sup>Required</sup> <a name="StartupMode" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.startupMode"></a>

```csharp
public string StartupMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ad.gpoSecurity.GpoSecuritySystemServicesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



